import jwt from 'jsonwebtoken'

const auth = {
    autheticate(jwt,cb){
        if(typeof window !== undefined){
            localStorage.setItem('jwt', JSON.stringify(jwt))
        cb();
        }
    },
    
    isAutheticate(){
        if(typeof window == undefined){
            return false
        }
        if(localStorage.getItem('jwt')){
            return JSON.parse(localStorage.getItem('jwt'))
        }
        else{
            return false;
        }
    },
    checkUser(token){
        return jwt.decode(token, {complete: true});
    },
    signout(cb){
        if(typeof window !== undefined)
        localStorage.removeItem("jwt")
        localStorage.removeItem("json_token")
        localStorage.removeItem("role")

        cb()
        
    }
}
export default auth;