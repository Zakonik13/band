import React, { useEffect } from "react"
import { UPDATE_TOUR } from "../utils/actions"
import { useStoreContext } from "../utils/GlobalState"
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

      <div className="p-5">
        <h1 style={{ display: "flex", justifyContent: "center", fontSize: 35 }}>Tour Dates 2022</h1>
        <ul className="tour-list text-center" style={{ listStyleType: "none" }}>
          <li>January</li>
          <li>February</li>
          <li>March</li>
          <li>April</li>
          <li>May</li>
          <li>June</li>
          <li>July</li>
          <li>August</li>
          <li>September</li>
          <li>October</li>
          <li>November</li>
          <li>December</li>
        </ul>
      </div>
      <hr />
    </Page>
  )
}

export default Tour
