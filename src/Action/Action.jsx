export const registerUser=(userData)=>{

    return{
        type:'CREATE_USER',
        payload: userData
    }
}