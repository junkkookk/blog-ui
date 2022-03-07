import { Col, Row } from '@douyinfe/semi-ui'
import React from 'react'

function Discover() {
  return (
    <Row  gutter={24}>
      <Col xs={12} sm={12} md={12} lg={10} xl={10} 
          offset={4} >
        <div id="left" style={{
          borderRadius: '10px',
          border: '1px solid var(--semi-color-border)',
          height: '376px',
          padding: '32px',
        }}>
          <div className="col-content">左侧内容</div>
        </div>
      </Col>
      <Col xs={0} sm={0} md={0} lg={4} xl={4}  >
        <div className="col-content">右侧内容</div>
      </Col>
    </Row >
  )
}

export default Discover