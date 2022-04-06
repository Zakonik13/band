const { signToken } = require("../utils/auth");
const { Admin } = require("../models");
const { Music } = require("../models");
const { Merch } = require("../models");
const { Tour } = require("../models");
const { News } = require("../models");
const { About } = require("../models");
const { Subscription } = require("../models");
const { Image } = require("../models")
const { Video } = require("../models")

const resolvers = {
  Query: {
    admins: async () => {
      return Admin.find();
    },
    music: async () => {
      return Music.find();
    },
    merch: async () => {
      return Merch.find();
    },
    tour: async () => {
      return Tour.find();
    },
    news: async () => {
      return News.find();
    },
    about: async () => {
      return About.find();
    },
    subscription: async () => {
      return Subscription.find();

    },
      images: async () => {
      return Image.find()
    },
    videos: async () => {
      return Video.find()
  },
  Mutation: {
    addAdmin: async (parent, args) => {
      const admin = await Admin.create(args);
      const token = signToken(admin);

      console.log(admin);

      return { token, admin };
    },
    login: async (parent, { email, password }) => {
      const admin = await Admin.findOne({ email });

      if (!admin) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await admin.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(admin);
      return { token, admin };
    },
    addMusic: async (parent, args) => {
      const music = await Music.create(args);

      return music;
    },
    addNews: async (parent, args) => {
      const news = await News.create(args);

      return news;
    },
    addMerch: async (parent, args) => {
      const merch = await Merch.create(args);

      return merch;
    },

    addTourDate: async (parent, args) => {
      const tour = await Tour.create(args);

      return tour;
    },
    addAbout: async (parent, args) => {
      const about = await About.create(args);

      return about;
    },
    addSubscription: async (parent, args) => {
      const subscription = await Subscription.create(args);

      return subscription;
    },
    removeTourDate: async (parent, { _id }) => {
      await Tour.findOneAndDelete({ _id });
    },
    removeMerch: async (parent, { _id }) => {
      await Merch.findOneAndDelete({ _id });
    },
    removeNews: async (parent, { _id }) => {
      await News.findOneAndDelete({ _id });
    },

    updateMerch: async (parent, { _id, name, image, price, quantity }) => {
      const merch = await Merch.findOneAndUpdate(
        { _id },
        {
          name: name,
          type: type,
          quantity: quantity,
          price: price,
          image: image
        },
        { new: true }
      );

      return merch;
    },
    updateAbout: async (parent, { _id, body }) => {
      const about = await About.findOneAndUpdate(
        { _id },
        {
          body: body
        },
        { new: true }
      );

      return about;
    },
    addImage: async (parent, args) => {
      const image = await Image.create(args)

      return image
    },
    addVideo: async (parent, args) => {
      const video = await Video.create(args)

      return video
    },
  }
};

module.exports = resolvers;
