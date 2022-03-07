import Category from '@/pages/Category'
import Discover from '@/pages/Discover'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import React, { ReactNode } from 'react'


const routes: Array<{
    path: string
    component?: ReactNode
    name?: string

}> = [
    {
        path:'/',
        component:<Discover/>,
        name:'home'
    },
    {
        path:'/login',
        component:<Login/>,
        name:'login'
    },
    {
        path:'/register',
        component:<Register/>,
        name:'register'
    },
    {
        path:'/discover',
        component: <Discover/>,
        name:'discover'
    },
    {
        path:'/category',
        component: <Category/>,
        name:'category'
    }
]

export default routes
