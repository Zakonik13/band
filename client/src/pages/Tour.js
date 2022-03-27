import React, { useEffect } from "react"
import { UPDATE_TOUR } from "../utils/actions"
import { useStoreContext } from "../utils/GlobalState"
import { Button } from "react-bootstrap"
// Components
import Page from "../components/Page"

const Tour = () => {
  const [state, dispatch] = useStoreContext()
  const { tours } = state
  const tourData = [
    {
      Month: "January",
      Date: "January 1st",
      Location: "Lexington, Ky"
    },
    {
      Month: "January",
      Date: "January 7th",
      Location: "Louisville, Ky"
    },
    {
      Month: "January",
      Date: "January 14th",
      Location: "Nashville, Tn"
    }
  ]

  function handleAlert() {
    alert("Unfortunately this event is SOLD OUT")
  }

  useEffect(() => {
    //if data exist or has changed from the response of useQuery (not currently used), then run dispatch()
    if (tourData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for tours to
      dispatch({
        type: UPDATE_TOUR,
        tours: tourData
      })
    }
  }, [dispatch])

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
      </div>
      <hr />

      <div className="p-3">
        <ul className="tour-list text-center" style={{ listStyleType: "none" }}>
          <li>
            <h4 style={{ paddingTop: "30px", fontFamily: "Limo" }}>5/17/22 @ KFC YUM Center Louisville, KY</h4>{" "}
            <Button href="http://ticketmaster.com" target="_blank" size="sm" className="mt-3">
              Buy Tickets
            </Button>
          </li>
          <li>
            <h4 style={{ paddingTop: "30px", fontFamily: "Limo" }}>5/28/22 @ Bridgestone Arena Nashville, TN</h4>{" "}
            <Button variant="danger" size="sm" onClick={handleAlert} className="mt-3">
              Sold Out
            </Button>
          </li>
          <li>
            <h4 style={{ paddingTop: "30px", fontFamily: "Limo" }}>6/9/22 @ Manchester, TN</h4>{" "}
            <Button href="http://bonnaroo.com" target="_blank" size="sm" className="mt-3">
              Buy Tickets
            </Button>
          </li>
        </ul>
      </div>
      <hr />
    </Page>
  )
}

export default Tour
