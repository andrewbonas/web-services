import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">
      <h1 >404: Page Not Found</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
     <img src="../images/404.png"/>
     </div>
    </Layout>
  )
}

export default NotFound