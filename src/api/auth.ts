import request from "@/utils/request";
import { User } from "./typings";


export const login = (data: any) =>{
    return request<string>({
        url:'/login',
        method: 'post',
        data
    })
}

export const me = () =>{
    return request<User>({
        url:'/me',
        method: 'get'
    })
}

export const oauthLogin=(data: any)=>{
    return request<string>({
        url:'/oauth/callback/gitee',
        method: 'get',
        params: data
    })
}