// @ts-nocheck

const imgs = [
  require("./pretty1.jpg"),
  require("./pretty2.jpg"),
  require("./pretty3.jpg"),
  require("./pretty4.jpg"),
  require("./pretty6.jpg"),
  require("./pretty7.jpg"),
  require("./pretty8.jpg"),
]
export const randomPretty = () => {
  return imgs[Math.floor(Math.random() * imgs.length)]
}