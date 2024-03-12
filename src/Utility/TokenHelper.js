export function SetToken(token){
    sessionStorage.setItem('token',token)
}
export function GetToken(){
    return sessionStorage.getItem('token')
}
export function RemoveToken(){
   sessionStorage.clear()
    window.location.href = '/login'
}
export function SetEmail(email){
    sessionStorage.setItem('email',email)
}
export function GetEmail(){
   return  sessionStorage.getItem('email')
}

export function ManageExpireToken(status){
    if(status === 401){
       sessionStorage.clear();
       window.location.href = '/login'
    }
}