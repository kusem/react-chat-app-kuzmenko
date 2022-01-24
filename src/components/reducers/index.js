import {combineReducers} from "@reduxjs/toolkit"
import MessageReducers from "./message"
import SettingsReducers from "./settings"
import editMessage from "./editMessage"
import newMessage from "./newMessage"

const allReducers = combineReducers({
    messages: MessageReducers,
    settings: SettingsReducers,
    messageEdit: editMessage,
    newMessage: newMessage
})

export default allReducers;