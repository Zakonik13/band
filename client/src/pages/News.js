import React from "react"
// Components
import Page from "../components/Page"
import { GET_NEWS } from "../utils/queries"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { REMOVE_NEWS } from "../utils/mutations"
import Auth from "../utils/Auth.js"
import { Button } from "react-bootstrap"

const News = () => {
  const { data, loading } = useQuery(GET_NEWS)
  const [removeNews] = useMutation(REMOVE_NEWS)

  if (loading) {
    return ""
  }

  const handleRemove = async id => {
    await removeNews({ variables: { id } })
    window.location.assign("/news")
  }

  return (
    <Page title={"News"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo"
        }}
      >
        <div>News</div>
      </div>
      <hr />
      {data.news.map(data => {
        return (
          <center key={data._id} className="p-4">
            <h3 style={{ fontFamily: "Arial" }}>{data.title}</h3>
            <h6>-{data.date}-</h6>
            <div className="p-2">
              <p style={{ textIndent: "50px" }}>{data.body}</p>
            </div>
            {Auth.loggedIn() ? (
              <Button onClick={() => handleRemove(data._id)} className="mb-5" size="sm" variant="outline-danger">
                Remove Post
              </Button>
            ) : (
              ""
            )}
          </center>
        )
      })}
      <hr />
    </Page>
  )
}

export default News
