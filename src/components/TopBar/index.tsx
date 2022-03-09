import React, { useState } from 'react'
import { Nav, Avatar, Dropdown, Switch, Button } from '@douyinfe/semi-ui';
import { IconStar, IconUser,IconDescend2, IconComment, IconSun, IconMoon, IconHash, IconMale, IconBolt } from '@douyinfe/semi-icons';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../store';

const iconMap={
    light:<IconSun/>,
    dark:<IconMoon/>
}

function TopBar() {

    const [user,setUser] = useRecoilState(userState)

    const navigate = useNavigate()

    const [icon,setIcon] = useState(iconMap.dark)

    const location = useLocation()

    return (
        <div style={{ width: '100%' }}>
            <Nav
                mode={'horizontal'}
                items={[
                    { itemKey: 'discover', text: <Link to='/discover'>发现</Link>, icon: <IconUser /> },
                    { itemKey: 'category', text: <Link to='/category'>分类</Link>, icon: <IconDescend2 /> },
                    { itemKey: 'tag', text: <Link to='/category'>标签</Link>, icon: <IconHash /> },
                    { itemKey: 'comment', text: <Link to='/category'>留言</Link>, icon: <IconComment /> },
                    { itemKey: 'about', text: <Link to='/category'>关于我</Link>, icon: <IconMale /> },
                ]}
                onSelect={key => navigate("/"+key.itemKey)}
                header={{
                    logo: <div style={{color:'#E91E63',fontSize:'26px'}}>
                            <IconBolt size="inherit" />
                        </div>,
                    text: 'Wan Blog'
                }}
                footer={
                    <>
                    <Button style={{marginRight:'8px'}} icon={icon} theme="light" onClick={()=>{
                        const body = document.body;
                        if (body.hasAttribute('theme-mode')) {
                            body.removeAttribute('theme-mode');
                            setIcon(iconMap.dark)
                        } else {
                            body.setAttribute('theme-mode', 'dark');
                            setIcon(iconMap.light)
                        }
                    }}/>
                    
                    {
                        user.id!==0?<Dropdown
                        position="bottomRight"
                        render={
                            <Dropdown.Menu>
                                <Dropdown.Item>详情</Dropdown.Item>
                                <Dropdown.Item 
                                    onClick={()=>{
                                        setUser({
                                            id:0,
                                            username:'',
                                            avatar:''
                                        })
                                    }}
                                >退出</Dropdown.Item>
                            </Dropdown.Menu>
                        }
                    >
                        <Avatar size="small" color='light-blue' style={{ margin: 4 }} src={user.avatar}>{user.username}</Avatar>
                        <span>{user.username}</span>
                    </Dropdown>: <Button theme='solid' type='primary' style={{ marginRight: 8 }} 
                        onClick={()=>{
                            navigate('/login?redirect='+location.pathname)
                        }}
                    >登陆</Button>
                    }
                    </>
                }
            />
        </div>
    );
}
export default TopBar