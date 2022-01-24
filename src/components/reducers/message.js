/*import axios from "axios";

//axios.defaults.baseURL = "http://localhost:3000/";
//const MessagesArray = await axios.get("src/messages.json");

*/
import MessagesArray from '../../messages.json'

export default function (){
    return MessagesArray;
    /* пример содержимого
    [{
        "id": "80f08600-1b8f-11e8-9629-c7eca82aa7bd",
        "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
        "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
        "user": "Ruth",
        "text": "I don’t *** understand. It's the Panama accounts",
        "createdAt": "2020-07-16T19:48:12.936Z",
        "editedAt": ""
    }]
    */
}