import React, { useState } from "react"
// import { useStoreContext } from "../utils/GlobalState"
import { Button } from "react-bootstrap"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { REMOVE_TOUR_DATE } from "../utils/mutations"
import { GET_TOUR_DATE } from "../utils/queries"
import Auth from "../utils/Auth.js"
// Components
import Page from "../components/Page"
import AlertModal from "../components/AlertModal"

const Tour = () => {
  const { data, loading } = useQuery(GET_TOUR_DATE)
  const [removeTourDate] = useMutation(REMOVE_TOUR_DATE)
  // const [state, dispatch] = useStoreContext()
  // const { tours } = state
  const [modalShow, setModalShow] = useState(false)

  if (loading) {
    return ""
  }

  let alertDetails = {
    title: "This tour date is sold out!",
    ok: true
  }

  const handleRemove = async id => {
    await removeTourDate({ variables: { id } })
    window.location.assign("/tour")
  }

  // const tourData = [
  //   {
  //     Month: "January",
  //     Date: "January 1st",
  //     Location: "Lexington, Ky"
  //   },
  //   {
  //     Month: "January",
  //     Date: "January 7th",
  //     Location: "Louisville, Ky"
  //   },
  //   {
  //     Month: "January",
  //     Date: "January 14th",
  //     Location: "Nashville, Tn"
  //   }
  // ]

  // const handleAlert = () => {
  //   setModalShow(true)
  // }

  // useEffect(() => {
  //   //if data exist or has changed from the response of useQuery (not currently used), then run dispatch()
  //   if (tourData) {
  //     // execute our dispatch function with our action object indicating the type of action and the data to set our state for tours to
  //     dispatch({
  //       type: UPDATE_TOUR,
  //       tours: tourData
  //     })
  //   }
  // }, [dispatch])

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
        <AlertModal alertDetails={alertDetails} show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <hr />

      {data.tour.map(data => {
        return (
          <center key={data._id}>
            <div style={{ padding: "20px" }}>
              <h4 style={{ fontFamily: "Limo" }}>
                {data.date} @ {data.venue} , {data.location}
              </h4>
              {Auth.loggedIn() ? (
                <Button onClick={() => handleRemove(data._id)} variant="outline-danger" size="sm" className="mt-3">
                  Remove Date
                </Button>
              ) : (
                <Button href={data.link} target="_blank" size="sm" className="mt-3">
                  Buy Tickets
                </Button>
              )}
            </div>
          </center>
        )
      })}

      <hr />
    </Page>
  )
}

export default Tour
