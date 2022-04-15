import React, { useState } from "react";
// import { useStoreContext } from "../utils/GlobalState"
import { Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { REMOVE_TOUR_DATE } from "../utils/mutations";
import { GET_TOUR_DATE } from "../utils/queries";
import Auth from "../utils/Auth.js";
// Components
import Page from "../components/Page";
import AlertModal from "../components/AlertModal";

const Tour = () => {
  const { data, loading } = useQuery(GET_TOUR_DATE);
  const [removeTourDate] = useMutation(REMOVE_TOUR_DATE);
  const [modalShow, setModalShow] = useState(false);

  if (loading) {
    return "";
  }

  let alertDetails = {
    title: "This tour date is sold out!",
    ok: true
  };

  const handleRemove = async id => {
    await removeTourDate({
      variables: { id },
      refetchQueries: [{ query: GET_TOUR_DATE }]
    });
  };

  return (
    <Page title={"Tour"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo"
        }}
      >
        <div>Tour</div>
        <AlertModal
          alertDetails={alertDetails}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <hr />

      {data.tour.map(item => {
        return (
          <center key={item._id}>
            <div style={{ padding: "20px" }}>
              <h4 style={{ fontFamily: "Limo" }}>
                {item.date} @ {item.venue} , {item.location}
              </h4>
              {Auth.loggedIn() ? (
                <Button
                  onClick={() => handleRemove(item._id)}
                  variant="outline-danger"
                  size="sm"
                  className="mt-3"
                >
                  Remove Date
                </Button>
              ) : (
                <Button
                  href={item.link}
                  target="_blank"
                  size="sm"
                  className="mt-3"
                >
                  Buy Tickets
                </Button>
              )}
            </div>
          </center>
        );
      })}

      <hr />
    </Page>
  );
};

export default Tour;
