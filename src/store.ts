import { atom } from "recoil";

const userState= atom<{
    id: number
    name: string
    avatar: string
}>({
    key:'user',
    default:{
        id:0,
        name:'',
        avatar: ''
    }
})

export {userState}