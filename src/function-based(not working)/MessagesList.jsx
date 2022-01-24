import React, {useCallback, useEffect, useState} from 'react';

import SendMessage from "./SendMessage";
import Logo from "../logo.png"
import MessageRedux from "./MessageRedux";
import {useDispatch} from "react-redux";


function MessagesListRedux() {

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
        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };
    }, []);

    function UniqueUsers() {
        let userIDs = [];
        let summ = 0;
        MessagesListJSON.map(item => {
            if (userIDs[item.userId] !== undefined) {
                userIDs[item.userId] = userIDs[item.userId] + 1;
            } else {
                userIDs[item.userId] = 1; // maybe, some day, you'll need q-ty of messages sent by som users ;)
                summ++;
            }
        });
        return (summ)
    }

    //console.log(UniqueUsers());

    useEffect(() => {
        document.getElementById("LastMessage").scrollIntoView(); // scroll to the last message
    })
    const currentUserID = "5328dba1-1b8f-11e8-9629-c7eca82aa7bd";/* logged user ID - if you know what I mean ;) */


    return (
        <>
            <div className="card card-primary card-outline direct-chat direct-chat-primary">
                <div className="card-header">
                    <h3 className="card-title"><img src={Logo} width="50px"/> Super chat</h3>
                    <div className="card-tools">
                        <span title=""
                              className="badge bg-primary">Messages: {Object.keys(MessagesListJSON).length}</span>
                        <span title="3 New Messages" className="badge bg-success">Participants: {UniqueUsers()}</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="direct-chat-messages">
                        {MessagesListJSON.map(message =>
                            <div id="messagesInChat" key={message.id}>
                                <MessageRedux message={message}/>
                            </div>
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