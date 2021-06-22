import React from "react"
import Layout from "../components/layout"
import {StaticImage} from "gatsby-plugin-image"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About The Choir</h1>
      <p>The Summerside Community Choir is an open membership, mixed-voice community choir who welcomes new members at the beginning of each term to work towards an end-of-term concert. We perform two Christmas concerts in December and two spring concerts in May or June and may have extra events throughout the term.</p>
      <p>In 1978, Bill Leuty had a dream to start a community choir in Summerside, PEI, Canada.  He was able to make this dream a reality, and in 2018 the 50-plus member Summerside Community Choir celebrated forty years of choral music.</p>
      <StaticImage src="../images/35thAnniversaryCake.jpg" alt="35th Anniversary Cake" />
    </Layout>
  )
}

export default About