import * as React from "react"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import RecentTweet from "../components/twitter"
import RecentNews from "../components/recentnews"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <StaticImage src="../images/SCC2019FUN.jpg" alt="SCC fun pose"  />
     
    <ul>
      <li><Link to="/blog/">News</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/performances/">Performances</Link></li>
      <li><Link to="/join/">Join</Link></li>
      <li><Link to="/calendar/">Calendar</Link></li>
    </ul>
    
    <RecentTweet />
    <RecentNews />
  </Layout>

)

export default IndexPage