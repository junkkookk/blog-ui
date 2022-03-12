import { Card, Col, Row, Space } from '@douyinfe/semi-ui'
import React from 'react'
import style from './style.module.less'
import { Typography } from '@douyinfe/semi-ui';
import { IconClock, IconComment, IconEmoji, IconEyeOpened, IconLikeHeart } from '@douyinfe/semi-icons';
const { Title ,Paragraph,Text} = Typography;
const marginRight={
    marginRight: '.2rem'
}
function BlogCard() {
    return (
        <Card className={style.card}>
            <Row>
                <Col span={12}>
                    <div className={style.info}>
                        <Title heading={6} className={style.title}>零基础入门java开发</Title>
                        <Paragraph className={style.description} ellipsis={{ rows: 4 }}>
                            这是一个多行截断的例子：Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                        </Paragraph>
                        <div className={style.items}>
                            <Space spacing={2}>
                                <IconEyeOpened style={marginRight}/><Text type="tertiary">1</Text>
                                <IconComment style={marginRight} /><Text type="tertiary">1</Text>
                                <IconClock style={marginRight}/><Text type="tertiary">2022-03-11 07:55:33</Text>
                            </Space>
                             
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <img
                        className={style.img}
                        src="https://van-sunshine.oss-cn-beijing.aliyuncs.com/1ab0653dc523a8899d78f25dadc9b727.jpg" alt="" />
                </Col>
            </Row>
        </Card>
    )
}

export default BlogCard