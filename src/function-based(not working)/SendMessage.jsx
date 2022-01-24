import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import MessageInput from "./MessageInput";

const SendMessage = () => {

    const [newMessageText, addNewMessage] = useState( ""); //"text":

    const handleMessageChange = (e) => {
        e.preventDefault();
        addNewMessage(e.target.value);
    }
    const newMessageSubmit = (e) => {
        e.preventDefault();
        addNewMessage([...newMessageText, {...newMessageText, id: Date.now() }])
        //addNewMessage("text": "")
    }
    let messageText=""
    return (
        <div className="card-footer">
            <form action="#" method="post">
                <div className="input-group">
                    <MessageInput
                        type="text"
                        placeholder="Type Message ..."
                        className="form-control"
                        value={newMessageText.text}
                        onChange={e => addNewMessage({...addNewMessage, "text": e.target.value})}
                    />
                    <button type="submit" onClick={newMessageSubmit} className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    );
};

export default SendMessage;