import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero";
import ProductTypes from "../components/ProductTypes";
import Description from "../components/Description";
import LineForm from "../components/LineForm";

import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = () => {
  return (
    <>
      <Hero/>
      <ProductTypes />
      <Description />
      <LineForm />
    </>
  )
}

export default IndexPage
