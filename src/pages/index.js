import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{backgroundColor: `#f4f4f4`, padding: `2em`, textAlign: `center`}}>Summerside Community Choir is the longest-running community choir on PEI!</div>
    <ul>
      <li><Link to="/blog/">News</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/join/">Join</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
