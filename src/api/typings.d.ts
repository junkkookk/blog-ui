
export type AjaxResult<T> ={
    code: number
    msg: string
    data: T    
}

export type User={
    id:number
    username: string
    avatar?: string
}
