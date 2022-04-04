import React from "react";
import { Col } from "react-bootstrap";
//Icons
import apple from "../images/apple.jpeg";
import spotify from "../images/spotify.png";
//Songs
import song1 from "../music/arizona.mp3";
import song2 from "../music/appalachian coal mines.mp3";
import song3 from "../music/fight song.mp3";
import song4 from "../music/he conquered death.mp3";
import song5 from "../music/see the light.mp3";
import song6 from "../music/sweetheart.mp3";
import song7 from "../music/matelot.mp3";
import song8 from "../music/what i found.mp3";
import song9 from "../music/help you.mp3";
import song10 from "../music/racing like the wind.mp3";
//Components
import BackButton from "../components/BackButton";
import Page from "../components/Page";

const MusicDetails = () => {
  const songs = [
    {
      trackNumber: 1,
      title: "He Conquered Death",
      artist: "Bluegrass Billies",
      source: song4,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 2,
      title: "Fight Song",
      artist: "Bluegrass Billies",
      source: song3,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 3,
      title: "Sweetheart",
      artist: "Bluegrass Billies",
      source: song6,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 4,
      title: "Racing Like the Wind",
      artist: "Bluegrass Billies",
      source: song10,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 5,
      title: "See the Light",
      artist: "Bluegrass Billies",
      source: song5,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 6,
      title: "Appalachian Coal Mines",
      artist: "Bluegrass Billies",
      source: song2,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 7,
      title: "Arizona",
      artist: "Bluegrass Billies",
      source: song1,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 8,
      title: "What I Found",
      artist: "Bluegrass Billies",
      source: song8,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 9,
      title: "Matelot",
      artist: "Bluegrass Billies",
      source: song7,
      album: "Hootin and Hollerin"
    },
    {
      trackNumber: 10,
      title: "Help You",
      artist: "Bluegrass Billies",
      source: song9,
      album: "Hootin and Hollerin"
    }
  ];

  return (
    <Page>
      <div className="p-1">
        <BackButton />
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          fontFamily: "Limo"
        }}
      >
        Hootin' and Hollerin' (2021)
      </h1>

      <Col>
        {songs.map(songs => {
          return (
            <div>
              {songs.trackNumber === 2 ? (
                <div key={songs.trackNumber} className="pb-5">
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
                    <audio className="media-player" controls>
                      <source src={songs.source} type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              ) : (
                <div key={songs.trackNumber} className="pb-5">
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
                    <a
                      className="spotify-link"
                      href="https://open.spotify.com/track/2jWuNKBlgkfb3M0WDKexY8"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        style={{
                          height: "50px",
                          paddingLeft: "10px"
                        }}
                        src={spotify}
                        alt="spotify-icon"
                      />
                    </a>
                    <a
                      href="https://music.apple.com/us/album/big-country/358187446?i=358187488"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        style={{
                          height: "50px",
                          paddingLeft: "10px"
                        }}
                        src={apple}
                        alt="apple-icon"
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Col>
    </Page>
  );
};

export default MusicDetails;
