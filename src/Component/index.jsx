import React, { useState } from "react"
import { Tab, Row, Modal } from "react-bootstrap"
import Tabs from "./Tabs"
import Panel from "./Panel"

export const ContextChangeImage = React.createContext(()=>{});

const Componente = ({ elements={} }) => {
  const categories = Object.keys(elements)
  const [img, setImg] = useState({})
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const showImage = (img) => {
    setImg(img)
    setShow(true)
  }
  return categories.length ? (
    <ContextChangeImage.Provider value={showImage}>
      <div style={{
        maxWidth: "900px",
        overflow: "hidden"
      }}>
        <Tab.Container defaultActiveKey={categories[0]}>
          <Row>
            <Tabs categories={categories}/>
            <Panel data={elements} />
          </Row>
        </Tab.Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{img.alt || "Modal heading"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img {...img} style={{
            width: "100%"
          }}/>
        </Modal.Body>
      </Modal>
    </ContextChangeImage.Provider>
  ) : null
}

export default Componente