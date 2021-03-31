import React, { useContext } from "react"
import { Col, Tab } from "react-bootstrap"
import { ContextChangeImage } from "../index"

const Card = ({ img, showImage }) => {
  const _handleClick = e => {
    e.preventDefault()
    showImage(img)
  }
  return (
    <img {...img} style={{
      height: 150,
      cursor: "pointer"
    }} onClick={_handleClick} />
  )
}

const Content = ({ title, elements, parLayout }) => {
  const showImage = useContext(ContextChangeImage)
  console.log(showImage)
  return (
    <Tab.Pane eventKey={title}>
      <div>
        <h3 style={{textAlign: "center"}}>{title}</h3>
        <div style={{justifyContent: "center"}}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gridTemplateColumns: `repeat(${parLayout ? 2 : 3}, 1fr)`
          }}>
            {
              elements.map((img, i)=> <Card img={img}
                showImage={showImage} key={i} />)
            }
          </div>
        </div>
      </div>
    </Tab.Pane>
  )
}

const Panel = ({ data }) => {
  return (
    <Col sm={9}>
      <Tab.Content>
        {
          Object.keys(data).map(title =>
            <Content key={title} title={title}
            parLayout={!(data[title].length % 2)}
            elements={data[title]} />
          )
        }
      </Tab.Content>
    </Col>
  )
}

export default Panel