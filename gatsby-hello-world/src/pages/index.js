import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {

    return (
        <Layout>
            <Head title="home" />
            <h2> I'm Aaron, and I'm learning Gatsby </h2> 
            <p> Get in touch <Link to="/contact">Contact ME</Link></p>
        </Layout>
    )
}

export default IndexPage