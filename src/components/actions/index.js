export const editMessage = (message) => {
    return{
        type: "messageEdit",
        payload: message
    }
}

export const newMessage = (NewMessageObject) => {
    return{
        type: "newMessage",
        payload: NewMessageObject
    }
}

