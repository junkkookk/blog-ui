import { login, me, oauthLogin } from "@/api/auth";
import { userState } from "@/store";
import { IconGithubLogo, IconLock, IconUser } from "@douyinfe/semi-icons";
import { Button, Form, Spin, Toast } from "@douyinfe/semi-ui"
import { Typography } from '@douyinfe/semi-ui';
import { FormApi } from "@douyinfe/semi-ui/lib/es/form/interface";
import { useEffect, useRef } from "react";

import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";

const renderUrl = 'http://localhost:9001/oauth/render/gitee'
const redirectUrl = 'http://localhost:3000/login'


const { Title, Text } = Typography

function Login(props: any) {
    const navigate = useNavigate()
    const [_, setUser] = useRecoilState(userState)
    let [searchParams, setSearchParams] = useSearchParams();
    const form = useRef<FormApi>();

    const handleLogin = async (data: any) => {
        let opts = {
            content: '正在登陆...',
            duration: 0,
            icon: <Spin />
        };
        const id = Toast.info(opts)
        const res = await login(data)
        Toast.close(id)
        handleLoginSuccess(res)
        return res.data
    }

    const handleLoginSuccess = (res: any) => {
        let redirectPath = '/'
        if (res.code === 200) {
            localStorage.setItem("token", res.data)
            Toast.success("登陆成功")
            me().then(res => {
                let redirect = searchParams.get('redirect')
                if (redirect) {
                    setSearchParams("")
                    redirectPath = redirect
                }
                navigate(redirectPath)
                setUser(res.data)
            })
        }
    }

    useEffect(() => {
        let code = searchParams.get('code')
        let state = searchParams.get('state')
        if (code && state) {
            oauthLogin({ code, state, redirectUrl }).then(res => {
                handleLoginSuccess(res)
            })
        }
    }, [])



    return (
        <div style={{ marginTop: '120px', display: 'flex', justifyContent: 'center' }}>
            <Form
                getFormApi={(formApi) => {
                    form.current = formApi
                }}
                style={{
                    width: '400px',
                    border: '1px solid var(--semi-color-border)',
                    padding: '32px'
                }}
            >
                <Title heading={3} style={{ marginBottom: '8px' }} >登陆</Title>
                <Form.Input size="large" placeholder={"请输入用户名"} prefix={<IconUser />} noLabel showClear field='username' />
                <Form.Input size="large" placeholder={"请输入密码"} prefix={<IconLock />} noLabel mode="password" showClear field='password' />
                <Button onClick={
                    async () => {
                        await handleLogin(form.current?.getValues())
                    }
                } size="large" type="primary" theme="solid" style={{ width: "100%", marginTop: '10px' }}>登陆</Button>
                <div style={{
                    width: '100%',
                    marginTop: '22px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex' }}>
                        <Text style={{ marginRight: '4px' }}>其他登陆方式</Text> <IconGithubLogo className="point-hand" size="large" onClick={() => {
                            window.location.href = renderUrl + '?redirectUrl=' + redirectUrl
                        }} />
                    </div>
                    <div>
                        <Text link onClick={() => { navigate('/register') }}>点击注册</Text>
                    </div>
                </div>
            </Form>
        </div >
    )
}

export default Login