import React from "react"
import { Button, Col, Row } from "react-bootstrap"
//Songs
import song1 from "../music/arizona.mp3"
import song2 from "../music/appalachian coal mines.mp3"
import song3 from "../music/fight song.mp3"
import song4 from "../music/he conquered death.mp3"
import song5 from "../music/see the light.mp3"
import song6 from "../music/sweetheart.mp3"
import song7 from "../music/matelot.mp3"
import song8 from "../music/what i found.mp3"
import song9 from "../music/help you.mp3"
import song10 from "../music/racing like the wind.mp3"

const Music = () => {
  const songs = [
    { trackNumber: 1, title: "He Conquered Death", artist: "Bluegrass Billies", source: song4, album: "Hootin and Hollerin" },
    { trackNumber: 2, title: "Fight Song", artist: "Bluegrass Billies", source: song3, album: "Hootin and Hollerin" },
    { trackNumber: 3, title: "Sweetheart", artist: "Bluegrass Billies", source: song6, album: "Hootin and Hollerin" },
    { trackNumber: 4, title: "Racing Like the Wind", artist: "Bluegrass Billies", source: song10, album: "Hootin and Hollerin" },
    { trackNumber: 5, title: "See the Light", artist: "Bluegrass Billies", source: song5, album: "Hootin and Hollerin" },
    { trackNumber: 6, title: "Appalachian Coal Mines", artist: "Bluegrass Billies", source: song2, album: "Hootin and Hollerin" },
    { trackNumber: 7, title: "Arizona", artist: "Bluegrass Billies", source: song1, album: "Hootin and Hollerin" },
    { trackNumber: 8, title: "What I Found", artist: "Bluegrass Billies", source: song8, album: "Hootin and Hollerin" },
    { trackNumber: 9, title: "Matelot", artist: "Bluegrass Billies", source: song7, album: "Hootin and Hollerin" },
    { trackNumber: 10, title: "Help You", artist: "Bluegrass Billies", source: song9, album: "Hootin and Hollerin" }
  ]

  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 35,
          fontFamily: "Limo",
          paddingTop: "40px"
        }}
      >
        Music
      </h2>
      <hr />
      <Button className="" href="/media" size="sm">
        Back to Media
      </Button>
      <h1
        style={{
          display: "flex",
          fontFamily: "Limo",
          justifyContent: "center",
          fontSize: 40,
          paddingBottom: 30
        }}
      >
        Hootin' and Hollerin' (2019)
      </h1>
      <Col>
        <Row>
          {songs.map(songs => {
            return (
              <div key={songs.name} className="pb-5">
                <h6
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {songs.trackNumber}. {songs.title}
                </h6>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {console.log(songs.source)}
                  <audio controls>
                    <source src={songs.source} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            )
          })}
        </Row>
      </Col>
      <hr />
    </div>
  )
}

export default Music
