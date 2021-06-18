import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"


function changeBackground(event) {
  event.target.style.color = 'black';
} 

function revertBackground(event) {
  event.target.style.color = '#8b2004';
}

const NavLink = (props) => (
  <Link 
    onMouseOver={changeBackground} 
    onMouseLeave={revertBackground}
    style ={{
      color: '#8b2004',
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


const Header = ({ siteTitle }) => (
  <header
    style={{
      
      marginBottom: `0.5rem`,
   
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem`,
      
      }}
    >

      <StaticImage src="../images/scclogo.png" alt="SCC Logo" width="100" />
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
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
