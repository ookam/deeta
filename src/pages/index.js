import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="HOME" />
    <div
      data-uk-height-viewport="offset-top: true; offset-bottom: true"
      className="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center"
    >
      <div className="uk-width-1-1">
        <div className="uk-container">
          <p>
            <img src="/static_assets/img/kao.jpg" style={{width: "200px", height: "200px", "border-radius": "50%"}}/>
          </p>
          <p className="uk-margin-medium uk-text-lead">
            mahiro oka / website
            <br/>
            暇な時に少しずつ作ってます
          </p>
          <div uk-grid="" className="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center uk-grid">
            <div className="uk-first-column">
              <Link to="/profile" className="uk-button uk-button-primary tm-button-primary uk-button-large tm-button-large uk-visible@s">Profile</Link>
              <Link to="/profile" className="uk-button uk-button-primary tm-button-primary uk-hidden@s tm-button-default">Profile</Link>
            </div>
            <div>
              <Link to="/list" className="uk-button uk-button-default tm-button-default uk-button-large tm-button-large uk-visible@s">SITE LIST</Link>
              <Link to="/list" className="uk-button uk-button-default tm-button-default uk-hidden@s">SITE LIST</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
