import { GetServerSidePropsContext } from "next"
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

const redirectTo = (year: string, slug: string) => `https://blog.terrier.dev/blog/${year}/${slug}`
export const getServerSideProps = async ({ res, params }: GetServerSidePropsContext) => {
  const { year, slug } = params || {}
  if (typeof slug !== "string" || typeof year !== "string") {
    res.statusCode = 404
    res.end()
    return
  }
  res.setHeader('Location', redirectTo(year, slug))
  res.statusCode = 302
  res.end()
  return {
    props: { year, slug }
  }
}

export default function Blog({ year, slug }: any) {
  const url = redirectTo(year, slug)
  useEffect(() => {
    // @ts-ignore
    // window?.href = url
  }, [])
  return <div>
    <Helmet>
      <link rel="canonical" href={url} />
    </Helmet>
      redirect to: <a href={url}>{url}</a>
  </div>
}