/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Welcome from "./Welcome/Welcome"
import Temple from "./Temple/Temple"
import Offer from "./WhatWeOffer/Offer"
import Events from "./Events/Events"
import Location from "./Location/Location"
import Header from "./header"
import "./layout.css"
import Support from "./SupportedBy/SupportedBy"
import Gallery from "./Temple/Gallery"
import Footer from "./Footer/Footer"
import Image from "./image"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>


        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {/* <Gallery /> */}
          <Image />
          <Welcome />
          <Temple />

          <h2>WHAT WE OFFER</h2>

          <Offer
            title={"CULTURAL PRESERVATION"}
            text={
              "Through events and story telling, we keep the ancient Hindu traditions alive ensuring their adoption by the next generation of Canadians."
            }
            iframe={
              <iframe
                width="1522"
                height="856"
                src="https://www.youtube.com/embed/mgabrMvtUrw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            }
          />
          <Offer
            title={"A PLACE OF WORSHIP"}
            text={
              "Our primary divine figureheads are Vitthoba, Ganesh, & Sai Baba however members of our community are free to worship and pray to their god/goddess of choice.  Our facility has integrated most idols and we frequently hold cross-cultural events with other non-profits and places of worship."
            }
            iframe={
              <iframe
                width="1522"
                height="856"
                src="https://www.youtube.com/embed/Fa9dFBf5Z4A"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            }
          />
          <Offer
            title={"EMBRACE CANADA"}
            text={
              "Our primary divine figureheads are Vitthoba, Ganesh, & Sai Baba however members of our community are free to worship and pray to their god/goddess of choice.  Our facility has integrated most idols and we frequently hold cross-cultural events with other non-profits and places of worship."
            }
            text2={
              "We also help newcomers transition into the Canadian life by helping them learn the language and idioms, cultural norms, and connecting them with other community events as well as government services."
            }
            iframe={
              <iframe
                width="1522"
                height="856"
                src="https://www.youtube.com/embed/I73Hvl7nhfw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            }
          />
          <Events />

          <Location />
          <Support />
          <Footer />
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
