import React from 'react'
import Layout from "../component/Layout";
const productTemplate = ({pageContext:{data}}) => {
    console.log(data);
    return (
        <Layout>
            <div class="row">
            <div class="col-md-4 col-sm-12">
            <section style={{display:'flex',justifyContent:'center', flexFlow:'column wrap',alignItems:'center'}}>
                <h2>{data.title}</h2>
                <img src={data.image.fluid.src} alt={data.title} />
                <p>{data.price}</p>
                <p>{data.info.info}</p>
                <button type="btn">add to cart</button>
            </section>
            </div>
            </div>
        </Layout>
    )
}

export default productTemplate


// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../component/Layout";


// const productTemplate = ({pageContext:{ slug }}) =>{
//     return (
//         <div>
//             <Layout>
//             {/* style={{display:'flex',justifyContent:'space-around', alignItems:'center'}} */}
//             <section  style={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>
//               {
//                   contentfulProduct.nodes.map((product)=>{
//                      //  console.log('product',product);
//                      return(
                       
//                          <article key={product.id}>
//                           <h2>{product.title}</h2>
//                           <img src={product.image.fluid.src} alt={product.title} style={{width:300, height:250}} />
//                           <div style={{display:'flex',justifyContent:'space-between'}}>
//                           <span>{product.price}</span>
//                           <p>{product.info.info}</p>
//                           {/* <Link to={`/products/${product.slug}`}>More Info</Link> */}
//                           </div>   
//                          </article>
                         
                         
                         
//                      )
//                   })
//               }  
//             </section>
//             </Layout>
//         </div>
//          )
// }

// export const query = graphql`
//   {
//     contentfulProduct(slug: {eq: $slug}) {
//       title
//       price
//       image {
//         fluid {
//           src
//         }
//       }
//       info {
//         info
//       }
//     }
//   }
// `

// export default productTemplate