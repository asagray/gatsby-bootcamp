import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {

    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Me</h1>
            <p>Get a hold of me <Link to="https://twitter.com/asagray">on Twitter</Link></p>
        </Layout>
    
    )
}

export default ContactPage