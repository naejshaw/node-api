import { noContent, ok } from "../Utils/HttpHelper"


export const getPlayerService = async ()=>{
    const data = {
        player: "Lionel",
        team: "Barcelona"
    }
    let response = null

    if(data){
        response = await ok(data)
    }else{
        response = await noContent()
    }
    return response
}