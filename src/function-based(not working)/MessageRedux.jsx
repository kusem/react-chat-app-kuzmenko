import React from "react";
import {useDispatch} from "react-redux";

const MessageRedux = ({message}) => {
    const currentUserID = "5328dba1-1b8f-11e8-9629-c7eca82aa7bd";/* logged user ID - if you know what I mean ;) */

    const {id, userId, avatar, user, text, createdAt, editedAt} = message;

    function ISOtoNormalTime(ISOtoNormalTime) {
        const date = new Date(ISOtoNormalTime);
        return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' at ' + date.getHours() + ':' + date.getMinutes());
    }

    function edited(editTime) {
        if (editTime === "") {
            return "";
        } else {
            return "edited";
        }
    }

    function EditMessage() {

    }

    function selfMessageAlign(classPropsBegin) {
        if (currentUserID === userId) {
            return classPropsBegin + "right"
        } else {
            return classPropsBegin + "left"
        }
    }

//<span onClick={() => dispatch(removeTask(id))}>Удалить</span> // диспатчим экшен removeTask для удаления таска из стора
    return (
        <div className={selfMessageAlign("direct-chat-msg ")} key={id}>
            <div className="direct-chat-infos clearfix">
                <span className={selfMessageAlign("direct-chat-name ")}>{user}</span>
                <span
                    className={selfMessageAlign("direct-chat-timestamp float-")}> {ISOtoNormalTime(createdAt)}
                    <i>{edited(editedAt)}</i></span>
            </div>
            <img className="direct-chat-img" src={avatar}
                 alt="Message User Image"/>
            <div className="direct-chat-text">
                {text}
            </div>
        </div>
    )
}

export default MessageRedux;


/*
{
   "id": "80f08600-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "I don’t *** understand. It's the Panama accounts",
    "createdAt": "2020-07-16T19:48:12.936Z",
    "editedAt ": ""
}*/
