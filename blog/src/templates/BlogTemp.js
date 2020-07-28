import React from 'react'
import Layout from "../component/Layout";

const BlogTemp = ({pageContext:{data}}) => {
    console.log(data);
    return (
        <Layout>
            <div class="row">
            <div class="col-md-4 col-sm-12">
            <section style={{display:'flex',justifyContent:'center', flexFlow:'column wrap',alignItems:'center'}}>
                <h2>{data.title.title}</h2>
                <img src={data.image.fluid.src} alt={data.title} />
                <p>{data.description.description}</p>
                <button>Add to cart</button>

            </section>
            </div>
            </div>
        </Layout>
    )
}

export default BlogTemp