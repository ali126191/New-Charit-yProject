import React from "react"
import Layout from "../components/layout"
import Welcome from "../components/Welcome/Welcome"
import Temple from "../components/Temple/Temple"
import Offer from "../components/WhatWeOffer/Offer"
import Events from "../components/Events/Events"
import Location from "../components/Location/Location"
import Support from "../components/SupportedBy/SupportedBy"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
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
    <SEO></SEO>
  </Layout>
)

export default IndexPage
