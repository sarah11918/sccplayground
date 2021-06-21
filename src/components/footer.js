import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"


function changeBackground(event) {
  event.target.style.color = 'gray';
} 

function revertBackground(event) {
  event.target.style.color = '#f4f4f4';
}

const NavLink = (props) => (
  <li><Link 
    onMouseOver={changeBackground} 
    onMouseLeave={revertBackground}
    style ={{
      color: '#f4f4f4',
      textDecoration: 'none',
      lineHeight: `1.6rem`,     
    }}
    activeStyle={{
      fontWeight: 'bolder',
      fontStyle: 'italic',
      
    }}

    to={props.to}
    >
    {props.children}
  </Link></li>
)


const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `#2f2f2f`,
      color: `#f4f4f4`,
      marginBottom: `2rem`,
      fontWeight: `300`,
   
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem 1.2rem`,
        display: `flex`,
        justifyContent: `space-between`,
      
      }}
    >

      <div style={{ }}>
        <p style={{}}>sumchoir@gmail.com</p>
        <p style={{}}><Link style={{fontSize: "0.75rem", color:"white", fontWeight: "bold", letterSpacing: "0.5px", textDecoration: "none"}} to="https://www.twitter.com/SummersideChoir"><StaticImage src="../images/twitter.png" alt="SCC Twitter" width="20" />{` `} SummersideChoir</Link></p>
        <p style={{}}><Link style={{fontSize: "0.75rem", color:"white", fontWeight: "bold", letterSpacing: "0.5px", textDecoration: "none"}} to="https://www.facebook.com/SummersideChoir"><StaticImage src="../images/fb.png" alt="SCC Facebook" width="20" />{` `} SummersideChoir</Link></p>
        <p><Link to="https://www.youtube.com/user/SummersideChoirPEI/"><StaticImage src="../images/youtube.png" alt="SCC YouTube" width="70" /></Link></p> 
      </div>
      <div style={{}}>
        <ul 
        style={{ 
          listStyle: `none`,
           
        }}
          
  

      >
        <li style={{fontWeight: `bold`}}>Find out more!</li>
        <NavLink activeClassName="active" to="/about">About</NavLink>{'    '}
        <NavLink activeClassName="active" to="/performances/">Performances</NavLink>{'    '}
        <NavLink activeClassName="active" to="/calendar/">Calendar</NavLink>{'    '}
        <NavLink activeClassName="active" to="/join/">Join</NavLink>
      </ul>
      </div>
 
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
