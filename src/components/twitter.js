import * as React from "react"
import {Timeline} from "react-twitter-widgets"

const RecentTweet = () =>
  (
   <div style={{width: `30%`}}>
      <a 
    class="twitter-timeline" 
    data-height="100" 
    data-dnt="true" 
    data-tweet-limit="1"  
    data-chrome="noheader nofooter noborders transparent noscrollbar" 
    href="https://twitter.com/summersidechoir" > Tweets by Summerside Choir
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    
   </div>
  )
  

export default RecentTweet
  
 
