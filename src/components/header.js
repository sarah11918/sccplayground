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


const Header = ({ siteTitle }) => (
  <header
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
{/*       <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `lavender`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
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
