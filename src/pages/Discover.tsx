import BlogCard from '@/components/BlogCard'
import { Button, Col, Row, Space } from '@douyinfe/semi-ui'
import React from 'react'

function Discover() {
  return (
    <Row gutter={24}>
      <Col xs={24} sm={24} md={10} lg={15} xl={12}
         >
        <div id="left" style={{
          borderRadius: '10px',
          border: '1px solid var(--semi-color-border)',
          height: '376px',
          padding: '32px',
        }}>
          <Space vertical>
           <BlogCard/>
          </Space>
        </div>
      </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={4}  >
      </Col>
    </Row >
  )
}

export default Discover