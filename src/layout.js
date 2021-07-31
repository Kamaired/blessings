import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import './css/typography.css'
import './css/styles.css'
import './css/styles.css'

export default function Template({ children }) {
  return (
    <div>
      <Helmet
        title="Brendie's Blessings"
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      />
      <div
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: `0 auto`,
            maxWidth: 1160,
            padding: `1.2rem`,
          }}
        >
          <div class="icon"
          style={{
            backgroundColor: 'green',
          }}>
            Icon
          </div>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Brendie's Blessings
            </Link>
          </h1>
          <div           style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '30%',
          }}>
            <Link class="navi" to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}>
              About
            </Link>
            <Link class="navi" to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}>
              Store
            </Link>
            <Link class="navi" to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}>
              Blog
            </Link>
            <Link class="navi" to="/recaptcha/"
              style={{
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                backgroundColor: 'teal',
                padding: '8px 16px', 
                marginRight: '10px', 
                marginTop: '3px',
              }}>
              Contact
            </Link>
            </div>  
        </div>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}
