import React from "react"

import { make as Header } from '~components/Header.bs'

function IndexPopup() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <Header />
      <a target="_blank" href="https://docs.plasmo.com/framework/env">
        with-env example extension
      </a>

      <p>{process.env.NODE_ENV}</p>
    </div>
  )
}

export default IndexPopup
