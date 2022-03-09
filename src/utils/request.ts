import axios,{AxiosRequestConfig} from 'axios'
import {Toast} from "@douyinfe/semi-ui"
import { AjaxResult } from '@/api/typings'


const service = axios.create({
    baseURL: '/api',
    timeout: 60*60*5,
    timeoutErrorMessage:'请求超时🙏'
})

service.interceptors.request.use((config: AxiosRequestConfig)=>{
    let token = localStorage.getItem("token")
    if(token){
        config.headers = {...config.headers,Authorization:token}
    }
    return config
})

// service.interceptors.response.use(()=>{

// })
const request = async <T = any> (config: AxiosRequestConfig): Promise<AjaxResult<T>> =>{
    try{
        const {data} =await service.request<AjaxResult<T>>(config)
        if(data.code!=200){
            throw new Error(data.msg)
        }
        return data
    }catch(e: any){
        const msg = e.message||'请求失败'
        console.log(e)
        Toast.error(msg)
        return {
            code:500,
            msg:'',
            data: null as any
        }
    }
}
export default request