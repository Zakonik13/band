import React from "react"
import Page from "./Page"

const News = () => {
  return (
    <Page title={"News"}>
      <div style={{ display: "flex", justifyContent: "center", fontSize: 35, fontFamily: "Limo" }}>
        <div>News</div>
      </div>
      <hr />
      <div className="p-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id odio ut risus aliquam commodo. Nulla nec risus quis risus dignissim molestie. Nulla venenatis viverra libero, sit amet dignissim augue dictum a. Ut ex nisl, iaculis in ligula sed, viverra interdum mauris. Praesent in maximus lectus. Nulla ante nunc, iaculis quis mattis sit amet, viverra in justo. Sed molestie sapien et magna interdum fermentum sit amet ac nisl. Nulla tellus nunc, accumsan non consectetur sed, consequat sit amet diam. In efficitur sit amet purus venenatis egestas. Proin arcu quam, facilisis eget ligula eget, malesuada scelerisque purus. Phasellus tempus fermentum est quis laoreet. Sed commodo justo vel leo viverra, id tincidunt dolor bibendum. Vestibulum volutpat dictum sapien, sit amet iaculis metus. Integer consequat laoreet metus, vel sodales mi ultricies in. Integer facilisis malesuada nibh malesuada dictum.</p>
        <p>Aliquam congue velit vitae libero auctor pretium. Nam et tortor vitae urna faucibus dapibus. Cras a maximus nibh. Maecenas non purus nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lorem sit amet orci sodales ultrices. Duis quam ante, congue at feugiat sit amet, vehicula vel libero. Pellentesque mollis, orci sed finibus lacinia, odio augue consectetur est, nec cursus neque dui eleifend lorem. Donec a aliquet sapien. Donec aliquam ullamcorper odio, eget vestibulum neque iaculis vel. Aliquam erat volutpat. Maecenas tempor tincidunt accumsan. Nam hendrerit suscipit risus, quis efficitur lorem sodales id. Sed quis vulputate diam, id viverra justo.</p>
      </div>
      <hr />
    </Page>
  )
}

export default News
