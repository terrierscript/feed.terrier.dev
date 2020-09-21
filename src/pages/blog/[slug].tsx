import { GetServerSidePropsContext } from "next"
import React from "react"
import { Helmet } from "react-helmet"

const redirectTo = (slug: string) => `https://blog.terrier.dev/blog/${slug}`
export const getServerSideProps = async ({ res, params }: GetServerSidePropsContext) => {
  const slug = params?.slug
  if (typeof slug !== "string") {
    res.statusCode = 404
    res.end()
    return
  }
  res.setHeader('Location', redirectTo(slug))
  res.statusCode = 302
  res.end()
}
export default function Blog({ slug }: any) {
  const url = redirectTo(slug)
  return <div>
    <Helmet>

    </Helmet>
    redirect to: <a href={url}>{url}</a>
  </div>

}