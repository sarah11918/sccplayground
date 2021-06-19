import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const RecentNews = () => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              timeToRead
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
              }
              id
              fields {
                slug
              }
            }
          }
        }
        
      }
    `
  )


  return(
  <div style={{width: `80%`}}>
    <h2 style={{fontSize:`1.35em`, letterSpacing:`0.5px`}} >Latest News</h2>
    <ul style={{listStyle: `none`}}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id}>
               <p style={{marginBottom: `0em`}}>
                <Link style={{textDecoration: `none`, color: `black`}} to={`/posts/${edge.node.fields.slug}/`}>
                  {edge.node.frontmatter.title}
                </Link>
              </p>
               <div>
                <span style={{fontSize: `0.75em`}}>
                  {edge.node.frontmatter.date}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
      <span style={{border: `1px solid gray`, padding: `0.5em 1.2em`, letterSpacing: `0.5px`, fontWeight: `300`}} >More News >></span>

      
  </div>
)
}

export default RecentNews