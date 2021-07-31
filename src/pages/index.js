import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout'
export default function Index() {
  return (
    <Layout children = "<div> icon </div>">
      <h1>Life is Choice Driven!</h1>
      <p>
        Need help steering your life in the right direction? Begin fellowship with Brenda.
      </p>
      <Link to="/recaptcha/">Get in Connection</Link>
    </Layout>
  )
}
