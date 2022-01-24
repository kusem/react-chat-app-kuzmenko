export default function (state=null, action){
    switch (action.type) {
        case "messageEdit":
            console.log('messageEdit action received for message.ID=' + action.payload.id);
            //MessageList.props.state.message=action.messageText;
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}
