import { EndPointing } from "../helper";
import { post } from "./web.request";


export const postUserData=(email,password)=>{
    return post(`${EndPointing}api/v1/user/signin`,{
        email: email,
        password: password,
    })
}

export const postRegisterData=(userName,email,password)=>{
    return post(`${EndPointing}api/v1/user/signup`,{
        username: userName,
        email:email,
        password: password,
    })
}
export const postGoogleRegisterData=(userName, email, password)=>{
    return post(`${EndPointing}api/v1/user/signup`,{
        username: userName,
        email:email,
        password: password,
    })
}
