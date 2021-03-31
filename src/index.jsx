import React from "react"
import ReactDOM from "react-dom"
import Componente from "./Component"
import "bootstrap/dist/css/bootstrap.min.css"

window.createGallery = (root, elements) => {
  if(typeof root === "string") {
    root = document.querySelector(root)
  }
  return ReactDOM.render(<Componente elements={elements} />, root)
}