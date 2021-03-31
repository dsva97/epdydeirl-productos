import React from "react"
import { Col, Nav } from "react-bootstrap"

const Tabs = ({ categories }) => {
  return (
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        {
          categories.map(cat =>
            <Nav.Item key={cat}>
              <Nav.Link eventKey={cat}>{cat}</Nav.Link>
            </Nav.Item>
          )
        }
      </Nav>
    </Col>
  )
}

export default Tabs