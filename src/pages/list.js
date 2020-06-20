import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const List = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="uk-section">
      <div className="uk-container">
        <h1>Site list</h1>
        <p>Welcome to page 2</p>
      </div>
    </div>
  </Layout>
)

export default List
