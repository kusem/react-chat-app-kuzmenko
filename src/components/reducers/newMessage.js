export default function (state=null, action){
    switch (action.type) {
        case "newMessage":
            console.log('new message object:');
            //const dispatch = useDispatch()
            console.log(action.payload)
            return action.payload
            break;
        default:
            return state;
            break;
    }
}
