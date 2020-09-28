// @ts-nocheck

const imgs = [
  require("./pretty1.jpg?resize&size=600&webp"),
  require("./pretty1.jpg?resize&size=600&webp"),
  require("./pretty1.jpg?resize&size=600&webp"),
  require("./pretty1.jpg?resize&size=600&webp"),
  require("./pretty1.jpg?resize&size=600&webp"),
  require("./pretty1.jpg?resize&size=600&webp"),
  require("./pretty1.jpg?resize&size=600&webp"),
  require("./pretty2.jpg?resize&size=600&webp"),
  require("./pretty3.jpg?resize&size=600&webp"),
  require("./pretty4.jpg?resize&size=600&webp"),
  require("./pretty6.jpg?resize&size=600&webp"),
  require("./pretty7.jpg?resize&size=600&webp"),
  require("./pretty8.jpg?resize&size=600&webp"),
]
export const randomPretty = () => {
  return imgs[Math.floor(Math.random() * imgs.length)]
}