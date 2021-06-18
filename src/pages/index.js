import * as React from "react"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import RecentTweet from "../components/twitter"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <StaticImage src="../images/SCC2019FUN.jpg" alt="SCC fun pose"  />
     
    <ul>
      <li><Link to="/blog/">News</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/join/">Join</Link></li>
    </ul>
    
    <a 
    class="twitter-timeline" 
    data-height="300" 
    data-dnt="true" 
    data-tweet-limit="1"  
    data-chrome="noheader nofooter noborders transparent noscrollbar" 
    href="https://twitter.com/summersidechoir" > Tweets
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <RecentTweet />
  </Layout>

)

export default IndexPage