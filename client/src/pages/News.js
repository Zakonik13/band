import React, { useState } from "react";
// Components
import Page from "../components/Page";
import { GET_NEWS } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { REMOVE_NEWS } from "../utils/mutations";
import Auth from "../utils/Auth.js";
import { Button } from "react-bootstrap";
import AlertModal from "../components/AlertModal";
import { ADD_SUBSCRIPTION } from "../utils/mutations";
import emailjs from "@emailjs/browser";

const News = () => {
  const { data, loading } = useQuery(GET_NEWS);
  const [removeNews] = useMutation(REMOVE_NEWS);
  const [modalShow, setModalShow] = useState(false);
  const [addSubscription] = useMutation(ADD_SUBSCRIPTION);
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "Thanks for signing up to our Newsletter!",
  });

  if (loading) {
    return "Loading...";
  }

  let alertDetails = {
    title: "Subscribe to our Newsletter !",
    add: false,
    submit: true,
    email: true,
    noThanks: true,
  };

  const handleModal = () => {
    setModalShow(true);
  };

  const handleAddSubscription = async () => {
    try {
      await addSubscription({
        variables: {
          name: emailData.name,
          email: emailData.email,
        },
      });
      await emailjs
        .send(
          "service_rhwnuvu",
          "template_iic2uof",
          {
            name: emailData.name,
            email: emailData.email,
            message: emailData.message,
          },
          "user_VX87bNMDuxlz9E5XfnclG"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setModalShow(false);
    } catch (e) {
      alert("You must provide a valid email address.");
    }
  };

  const handleRemove = async (id) => {
    await removeNews({
      variables: { id },
      refetchQueries: [{ query: GET_NEWS }],
    });
  };

  return (
    <Page title={"News"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
        }}
      >
        <div>News</div>
      </div>
      <hr />
      <AlertModal
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
        alertDetails={alertDetails}
        emailData={emailData}
        setEmailData={setEmailData}
        handleAddSubscription={handleAddSubscription}
      />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={handleModal} variant="outline-secondary" size="sm">
          Subscribe to Newsletter
        </Button>
      </div>
      {data.news.map((item) => {
        return (
          <center key={item._id} className="p-4">
            <h3 style={{ fontFamily: "Arial" }}>{item.title}</h3>
            <h6>-{item.date}-</h6>
            <div className="p-2">
              <p style={{ textIndent: "50px" }}>{item.body}</p>
            </div>
            {Auth.loggedIn() ? (
              <Button
                onClick={() => handleRemove(item._id)}
                className="mb-5"
                size="sm"
                variant="outline-danger"
              >
                Remove Post
              </Button>
            ) : (
              ""
            )}
          </center>
        );
      })}
      <hr />
    </Page>
  );
};

export default News;
