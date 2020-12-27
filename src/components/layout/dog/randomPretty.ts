// @ts-nocheck

// const imgs = [
//   require("./pretty1.jpg?resize&size=600&webp"),
//   require("./pretty1.jpg?resize&size=600&webp"),
//   require("./pretty1.jpg?resize&size=600&webp"),
//   require("./pretty1.jpg?resize&size=600&webp"),
//   require("./pretty1.jpg?resize&size=600&webp"),
//   require("./pretty1.jpg?resize&size=600&webp"),
//   require("./pretty1.jpg?resize&size=600&webp"),
//   require("./pretty2.jpg?resize&size=600&webp"),
//   require("./pretty3.jpg?resize&size=600&webp"),
//   require("./pretty4.jpg?resize&size=600&webp"),
//   require("./pretty6.jpg?resize&size=600&webp"),
//   require("./pretty7.jpg?resize&size=600&webp"),
//   require("./pretty8.jpg?resize&size=600&webp"),
// ]

// export const randomPretty = () => {
//   return imgs[Math.floor(Math.random() * imgs.length)]
// }

const imgs2 = [
  "/dog/pretty1.jpg",
  "/dog/pretty1.jpg",
  "/dog/pretty1.jpg",
  "/dog/pretty1.jpg",
  "/dog/pretty1.jpg",
  "/dog/pretty1.jpg",
  "/dog/pretty1.jpg",
  "/dog/pretty2.jpg",
  "/dog/pretty3.jpg",
  "/dog/pretty4.jpg",
  "/dog/pretty6.jpg",
  "/dog/pretty7.jpg",
  "/dog/pretty8.jpg",
]

export const randomPretty = () => {
  return imgs2[Math.floor(Math.random() * imgs2.length)]
}