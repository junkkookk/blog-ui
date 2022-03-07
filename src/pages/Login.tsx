import { userState } from "@/store";
import { IconGithubLogo, IconHelpCircle, IconLock, IconUser } from "@douyinfe/semi-icons";
import { Button, Form ,Spin,Toast} from "@douyinfe/semi-ui"
import { Typography } from '@douyinfe/semi-ui';

import { useNavigate,useLocation, useParams,useMatch } from "react-router";
import { useRecoilState } from "recoil";
const { Title, Text } = Typography
import qs from 'qs'

function Login(props: any) {
    const navigate = useNavigate()
    const [_,setUser]= useRecoilState(userState)
    const handleLogin = ()=>{
        return  new Promise<{id:number,name:string,avatar:string}>((resolve,reject)=>{
                setTimeout(()=>{
                resolve({
                    id:1,
                    name:'admin',
                    avatar:''
                })
            },3000)
            })
       
    }
    const location = useLocation()
    const query = qs.parse(location.search.substring(1))
    console.log(query);
    
    return (
        <div style={{ marginTop: '120px', display: 'flex', justifyContent: 'center' }}>
            <Form
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
                   async ()=>{ 
                        let redirectPath = '/'
                        let opts = {
                            content: '正在登陆...',
                            duration: 0,
                            icon:<Spin/>
                        };
                        const id = Toast.info(opts)
                        const user = await handleLogin()
                        Toast.close(id)
                        Toast.success("登陆成功")
                        setUser(user)
                        if(typeof query.redirect == 'string' && query.redirect !== '/login'){
                            redirectPath = query.redirect
                        }
                        navigate(redirectPath)
                        
                    }
                } size="large" type="primary" theme="solid" style={{ width: "100%", marginTop: '10px' }}>登陆</Button>
                <div style={{
                    width: '100%',
                    marginTop: '22px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex' }}>
                        <Text style={{ marginRight: '4px' }}>其他登陆方式</Text> <IconGithubLogo size="large" />
                    </div>
                    <div>
                        <Text link onClick={() => { navigate('/register')}}>点击注册</Text>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Login