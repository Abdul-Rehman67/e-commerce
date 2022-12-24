function response(success,message,payload){
    return {
        success:success,
        message:message,
        payload:payload

    }
}
module.exports={response}