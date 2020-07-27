import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../component/Layout'

const ComponentName = ({ data:{products} }) => {
    // console.log('data',allContentfulProduct);
    return (
   <div>
       <Layout>
       {/* style={{display:'flex',justifyContent:'space-around', alignItems:'center'}} */}
       <section  style={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>
         {
             products.nodes.map((product)=>{
                //  console.log('product',product);
                return(
                  
                    <article key={product.id}>
                     <h2>{product.title}</h2>
                     <img src={product.image.fluid.src} alt={product.title} style={{width:300, height:250}} />
                     <div style={{display:'flex',justifyContent:'space-between'}}>
                     <span>{product.price}</span>
                     <Link to={`/products/${product.slug}`}>More Info</Link>
                     </div>   
                    </article>
                    
                    
                    
                )
             })
         }  
       </section>
       </Layout>
   </div>
    )
}

export const query = graphql`
  {
    products:allContentfulProduct {
      nodes {
        image {
          fluid {
            src
          }
        }
        title
        slug
        price
        id
      }
    }
  }
`

export default ComponentName

