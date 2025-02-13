import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NoiseBackground from "../components/Background";
import Title from "../components/Title";

const pageStyles = {
  height: "100vh",
  width: "100%",
}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <NoiseBackground />
      {/* <Title /> */}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>🌞 Charles Denneulin</title>
