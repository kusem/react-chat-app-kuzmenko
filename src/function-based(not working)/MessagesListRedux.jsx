import React, {useCallback, useEffect, useState} from 'react';
import SendMessage from "./SendMessage";
import Logo from "../logo.png"
import MessageRedux from "./MessageRedux";


const MessagesListRedux = ({MessagesListRedux}) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 27) {
                console.log('Close')
            }
            if (event.keyCode === 38) {
                let btnText = "Edit";
                console.log('Edit!')
            }
        };
        window.addEventListener('keyup', handleKeyPress);
        document.getElementById("LastMessage").scrollIntoView(); // scroll to the last message
        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };

    }, []); //{()=> this.props.editMessage(message)}


    function UniqueUsers() {
        let userIDs = [];
        let summ = 0;
        MessagesListRedux.map(item => {
            if (userIDs[item.userId] !== undefined) {
                userIDs[item.userId] = userIDs[item.userId] + 1;
            } else {
                userIDs[item.userId] = 1; // maybe, some day, you'll need q-ty of messages sent by som users ;)
                summ++;
            }
        });
        return (summ)
    }


//if(MessagesListRedux.length)
    return (
        <>
            <div className="card card-primary card-outline direct-chat direct-chat-primary">
                <div className="card-header">
                    <h3 className="card-title"><img src={Logo} width="50px"/> Super chat</h3>
                    <div className="card-tools">
                        <span
                              className="badge bg-primary">Messages: {Object.keys(MessagesListRedux).length}</span>
                        <span title="3 New Messages" className="badge bg-success">Participants: {UniqueUsers()}</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="direct-chat-messages">
                        {MessagesListRedux.map(message =>
                            <MessageRedux message={message} key={message.id}/>
                        )}
                        <div id="LastMessage"></div>
                    </div>
                </div>

                <SendMessage command="" text="" buttonText="Send"/>
            </div>
        </>
    );
};

export default MessagesListRedux;