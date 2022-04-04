import React from "react"
// Components
import Page from "../components/Page"
import { GET_MERCH } from "../utils/queries"
import { REMOVE_MERCH } from "../utils/mutations"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { Col, Button } from "react-bootstrap"
import Auth from "../utils/Auth.js"

const Merch = () => {
  const { data, loading } = useQuery(GET_MERCH)
  const [removeMerch] = useMutation(REMOVE_MERCH)

  const handleRemove = async id => {
    await removeMerch({ variables: { id } })
    window.location.assign("/merch")
  }

  if (loading) {
    return ""
  }

  return (
    <Page title={"Merch"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo"
        }}
      >
        <div>Merchandise</div>
      </div>
      <hr />

      <Col>
        {data.merch.map(data => {
          return (
            <div
              key={data._id}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px"
              }}
            >
              <img className="merch-link" style={{ height: "200px", width: "auto" }} src={data.image} alt="" />
              <div style={{ paddingTop: "10px", margin: "15px" }}>
                <div>
                  <center>
                    <h4>{data.name}</h4>
                    <h6 className="p-1">Price: $ {data.price}</h6>
                    <h6 className="p-1">Quantity: {data.quantity}</h6>
                    {Auth.loggedIn() ? (
                      <Button onClick={() => handleRemove(data._id)} className="m-2" size="sm" variant="outline-danger">
                        Remove Item
                      </Button>
                    ) : (
                      <Button className="m-2" size="sm" variant="outline-secondary">
                        Add to Cart
                      </Button>
                    )}
                  </center>
                </div>
              </div>
            </div>
          )
        })}
      </Col>
    </Page>
  )
}

export default Merch
