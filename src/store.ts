import { atom } from "recoil";
import { User } from "./api/typings";

const userState= atom<User>({
    key:'user',
    default:{
        id:0,
        username:'',
        avatar: ''
    }
})

export {userState}