import React, {Component, useCallback} from 'react';
import {bindActionCreators} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import Logo from "../../logo.png";
import {editMessage, newMessage} from "../actions/index.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class MessageList extends Component{

    LastSelfMessageObject(){
        let currentUserID = this.ThisUserID();
        let lastMessage = {};
        this.props.messages.map(item => {
            if (item.userId === currentUserID) {
                lastMessage = item;
            }
        });
        return (lastMessage)
    }
    UniqueUsers() {
        let userIDs = [];
        let summ = 0;
        this.props.messages.map(item => {
            if (userIDs[item.userId] !== undefined) {
                userIDs[item.userId] = userIDs[item.userId] + 1;
            } else {
                userIDs[item.userId] = 1; // maybe, some day, you'll need q-ty of messages sent by any users ;)
                summ++;
            }
        });
        return (summ)
    }
    Messages_qty (){
        return this.props.messages.length;
    }
    ISOtoNormalTime(ISOtoNormalTime) {
        const date = new Date(ISOtoNormalTime);
        return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' at ' + date.getHours() + ':' + date.getMinutes());
    }
    selfMessageAlign(userId, currentUserID, classPropsBegin) {
        if (currentUserID === userId) {
            return classPropsBegin + "right"
        } else {
            return classPropsBegin + "left"
        }
    }
    edited(editTime) {
        if (editTime === "") {
            return "";
        } else {
            return "edited";
        }
    }
    ThisUserID (){
        let curID=this.props.settings[0].userID
        return curID
    }
    EditIcon(messageID){

        return this.LastSelfMessageObject().id === messageID ? true : false
    }
    handleLoad() { // перелистывание к последнему сообщению после загрузки
        var elmnt = document.getElementById("scroll_to_me_my_darling");
        elmnt.scrollIntoView();
    }
    EditKeyPressed(){
        this.props.editMessage(this.LastSelfMessageObject()) //даём задачу на редактирование сообщения
        //this.props.message = this.LastSelfMessageObject().text
        this.state = {
            value: this.LastSelfMessageObject().text,
            action:'editMessage'
        }
        this.state.value = this.LastSelfMessageObject().text
        //console.log("______")
        //console.log(this.state.value)
        //console.log("______")

    }

    keyboardKeyPressed(event){ // функция обработки нажатия кнопки вверх
        if(event.keyCode === 38) {
            this.EditKeyPressed()
            }
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        document.addEventListener("keyup", this.keyboardKeyPressed, false);
    }
    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)
        document.removeEventListener("keyup", this.keyboardKeyPressed, false);
    }
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.keyboardKeyPressed = this.keyboardKeyPressed.bind(this);
        this.state = {
            value: "",
            action: 'viewChat'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    showMessages(){
        //console.log(this.props) // для информации - выводим все пропсы
        return this.props.messages.map((message)=>{
            return(
                <div className={this.selfMessageAlign(message.userId,this.ThisUserID(),"direct-chat-msg ")} key={message.id}>
                    <div className="direct-chat-infos clearfix">
                        <span className={this.selfMessageAlign(message.userId,this.ThisUserID(),"direct-chat-name ")}>{message.user}</span>
                        <span
                            className={this.selfMessageAlign(message.userId, this.ThisUserID(),"direct-chat-timestamp float-")}>
                            {this.ISOtoNormalTime(message.createdAt)}
                            {this.EditIcon(message.id) ? <a onClick={()=>this.EditKeyPressed(message)}><FontAwesomeIcon icon={faEdit} /></a> : ""}
                            <i>{this.edited(message.editedAt)}</i></span>
                    </div>

                    <img className="direct-chat-img" src={message.avatar}
                         alt="Message User Image"/>
                    <div className="direct-chat-text">
                        {message.text}
                    </div>
                </div>
            )
        })
    }

    handleChange(e) {
        if(typeof(this.state.action) !="undefined" && this.state.action =="editMessage"){
            this.state.action="editMessage"
        } else {
            this.state.action="newMessage"
        }
        this.setState({
            value: e.target.value,
        });
        //console.log(this.state)  // выводим состояние при изменении поля
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.newMessage({message:this.state.value,action:this.state.action})
        this.setState({
            value: "",
            action:'viewChat'
        });
    }

    render (){
        return(
                <div className="card card-primary card-outline direct-chat direct-chat-primary">
                    <div className="card-header">
                        <h3 className="card-title"><img src={Logo} width="50px"/> Super chat</h3>
                        <div className="card-tools">
                        <span
                            className="badge bg-primary">Messages: {this.Messages_qty()}</span>
                            <span className="badge bg-success">Participants: {this.UniqueUsers()}</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="direct-chat-messages">
                            {this.showMessages()}
                            <div id="scroll_to_me_my_darling"></div>
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.value}/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"
                                        id="button-addon2" onClick={this.handleSubmit}>Send</button>
                            </div>
                        </div>
                    </form>

                </div>
        )
    }
}

function mapStateToProps (state){
    return {
        messages: state.messages,
        settings: state.settings
    }
}
function matchDispatchToProps (dispatch){
    /*return {
        editMessage:    (options) => dispatch(editMessage   , options),
        newMessage:     (options) => dispatch(newMessage    , options)
    }*/
    return bindActionCreators(
        {
            editMessage: editMessage,
            newMessage:newMessage
                    }, dispatch ) // по клику на сообщение доступно редактирование
}
export default connect(
    mapStateToProps,
    matchDispatchToProps
)(MessageList);