import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Performances = () => {
  return (
    <Layout>
      <SEO title="Summerside Choir Performances" />
      <h1>Upcoming Performances</h1>
      <p>Here is some info about performances.</p>
      <h2>Past Performances</h2>
    </Layout>
  )
}

export default Performances