import React from 'react';
import './styles/app.css';
import './styles/adminlte.min.css';
import MessageList from "./components/containers/messageList";

function Chat() {

    return (
        <div className="row container-fluid card-fill-height" >
            <div className="col-lg-12">
                <section className="content">
                    <MessageList/>
                </section>
            </div>
        </div>
    );
}

export default Chat;
