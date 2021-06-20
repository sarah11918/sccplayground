import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"


function changeBackground(event) {
  event.target.style.color = 'gray';
} 

function revertBackground(event) {
  event.target.style.color = '#f2f2f2';
}

const NavLink = (props) => (
  <Link 
    onMouseOver={changeBackground} 
    onMouseLeave={revertBackground}
    style ={{
      color: '#f2f2f2',
      textDecoration: 'none',     
    }}
    activeStyle={{
      fontWeight: 'bolder',
      fontStyle: 'italic',
      
    }}

    to={props.to}
    >
    {props.children}
  </Link>
)


const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `#2f2f2f`,
      color: `#f2f2f2`,
      marginBottom: `2rem`,
   
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem 1.2rem`,
      
      }}
    >

     <ul 
        style={{ 
          listStyle: `none`, 
          float: `right`,
          
           
        }}

      >
        <NavLink onMouseOver={changeBackground} onMouseLeave={revertBackground} activeClassName="active" to="/">Home</NavLink>{'    '}
        <NavLink activeClassName="active" to="/about">About</NavLink>{'    '}
        <NavLink activeClassName="active" to="/blog/">News</NavLink>{'    '}
        <NavLink activeClassName="active" to="/join/">Join</NavLink>
      </ul>
      <Link
          to="/"
          style={{
            color: `#f2f2f2`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <p style={{marginBottom: "0"}}><Link style={{fontSize: "0.75rem", color:"white", fontWeight: "bold", letterSpacing: "0.5px", textDecoration: "none"}} to="https://www.twitter.com/SummersideChoir"><StaticImage src="../images/twitter.png" alt="SCC Twitter" width="20" />{` `} SummersideChoir</Link></p>
        <p style={{marginBottom: "0"}}><Link style={{fontSize: "0.75rem", color:"white", fontWeight: "bold", letterSpacing: "0.5px", textDecoration: "none"}} to="https://www.facebook.com/SummersideChoir"><StaticImage src="../images/fb.png" alt="SCC Facebook" width="20" />{` `} SummersideChoir</Link></p>
        <p><Link to="https://www.youtube.com/user/SummersideChoirPEI/"><StaticImage src="../images/youtube.png" alt="SCC YouTube" width="70" /></Link></p> 
      </div> 
    
    <div style = {{margin: `0 auto`, textAlign:`center`,}}> <p style ={{fontSize: `0.5rem`}}>© {new Date().getFullYear()} Summerside Community Choir </p></div>
       
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
