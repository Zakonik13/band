const express = require("express");
// import middleware function for verifying token
const { authMiddleware } = require("./utils/auth");
// import ApolloServer
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const http = require("http");
// To serve up React front-end code in production
const path = require("path");
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const stripe = require("stripe")(
  "sk_test_51KnmF8G5CIkrVNkRHpHvgnb4HpKK0hWhoIDZI4hwhKuq87eFzzuGPtJ4GUq51mtCFVcZSgfom9dtfmy0RkcxBIEY003IJfDbQ0"
);

// require logic for integrating with Express
const app = express();
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creates session for user payment
app.post("/create-checkout-session", async (req, res) => {
  const amount = req.body.amount * 100;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Merchandise",
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/success/${req.body.id}`,
    cancel_url: "http://localhost:3000/profile",
  });

  res.json({ url: session.url });
});

async function startApolloServer(typeDefs, resolvers) {
  // Same ApolloServer initialization as before, plus the drain plugin
  // creates a new Apollo server and passes in our schema data
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // more required logic for integrating with Express
  await apolloServer.start();
  // integrate our Apollo server with the Express application as middleware
  apolloServer.applyMiddleware({ app });

  // Serve up static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }

  app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "./public/404.html"));
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server successfully running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(
        `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
    });
  });
}

startApolloServer(typeDefs, resolvers);
