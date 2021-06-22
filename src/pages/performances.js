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
      <div style={{maxWidth: `750px`}}>
      <StaticImage src="../images/concertposterchristmas2019.jpg" alt="2019 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2019.jpg" alt="2019 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2018.jpg" alt="2018 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2018.jpg" alt="2018 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2017.jpg" alt="2017 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2017.jpg" alt="2017 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2016.jpg" alt="2016 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2016.jpg" alt="2016 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2015.jpg" alt="2015 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2015.jpg" alt="2015 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2014.jpg" alt="2014 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2013.jpg" alt="2013 Spring Concert Poster" width="180" />
      </div>
    
    </Layout>
  )
}

export default Performances