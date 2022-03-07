import { IconEmoji, IconGithubLogo, IconHash, IconHelpCircle, IconLock, IconMail, IconUser } from "@douyinfe/semi-icons";
import { Button, Form, Input, InputGroup } from "@douyinfe/semi-ui"
import { Typography } from '@douyinfe/semi-ui';
import { useState } from "react";
import { useNavigate } from "react-router";
const { Title, Text } = Typography
function Register() {
    const [verifyStr,setVerifyStr] = useState<'发送验证码'|'重新发送'>('发送验证码')
    const navigate = useNavigate()
    return (
        <div style={{ marginTop: '120px', display: 'flex', justifyContent: 'center' }}>
            <Form
                style={{
                    width: '400px',
                    border: '1px solid var(--semi-color-border)',
                    padding: '32px'
                }}
            >
                <Title heading={3} style={{ marginBottom: '8px' }} >注册</Title>
                <Form.Input size="large" placeholder={"请输入用户名"} prefix={<IconUser />} noLabel showClear field='username' />
                <Form.Input size="large" placeholder={"请输入密码"} prefix={<IconLock />} noLabel mode="password" showClear field='password' />
                <Form.Input size="large" placeholder={"请输入确认密码"} prefix={<IconLock />} noLabel mode="password" showClear field='repassword' />
                <Form.Input size="large" placeholder={"请输入邮箱"} prefix={<IconMail />} suffix={ <Text link style={{width:'80px'}}>{verifyStr}</Text>} noLabel showClear field='email' />
                <Form.Input size="large" prefix={<IconHash/>}  placeholder="请输入验证码"  noLabel field="code"/>
                <Button size="large" type="primary" theme="solid" style={{ width: "100%", marginTop: '10px' }}>注册</Button>
                <div style={{
                    width: '100%',
                    marginTop: '22px',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <div>
                        <Text link onClick={()=>{navigate('/login')}}>已有账号？</Text>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Register