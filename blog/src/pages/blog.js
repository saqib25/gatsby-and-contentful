// import React from 'react'
// import Layout from './../component/Layout'

// export default function blog(){
//   return(
//       <Layout>
//      <div className="row">
//      <div className="col-md-4 col-sm-12">     
//     <h1>Hello form blog</h1>
//     </div>
//     <div className="col-md-4 col-sm-12"> hello</div>     
//     <div className="col-md-4 col-sm-12"> hello</div>     

//     </div> 
//       </Layout>
//   )
// }



import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../component/Layout'

const ComponentName = ({ data }) =>{
  console.log(data)
  return(
   <Layout>
    <div style={{width: "100%", display: "flex",justifyContent:"space-between",flexFlow:"row" }}> 
    {data.allContentfulBlogs.nodes.map((blog)=>{
      console.log(blog)
      return(

        <div key={blog.id} style={{width:"50%" , margin:"20px"}}>
          
          
        <div className="text-center"  ><h1 style={{fontSize:"15px"}}>{blog.title.title}</h1>
      <img src={blog.image.fluid.src} alt="blog-img" style={{width: "100%"}}></img>
      <Link to={`/blogs/${blog.slug}`}>More Info</Link>
      </div>

        </div>
      )
    })} 
    </div>
   </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogs {
      nodes {
        id
        title {
          title
        }
        image {
          fluid {
            src
          }
        }
        slug
        
      }
    }
  }
`

export default ComponentName


