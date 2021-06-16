import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>The longest-running community choir on PEI!</h3>
    <ul>
      <li><Link to="/blog/">News</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/join/">Join</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
