import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


function changeBackground(event) {
  event.target.style.color = 'rebeccapurple';
} 

function revertBackground(event) {
  event.target.style.color = 'lavender';
}

const NavLink = (props) => (
  <Link 
    onMouseOver={changeBackground} 
    onMouseLeave={revertBackground}
    style ={{
      color: 'lavender',
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
      background: `gray`,
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
            color: `lavender`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
       
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
