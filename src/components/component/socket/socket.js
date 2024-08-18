import { io } from "socket.io-client";
import { backedurl } from "../../../redux/backedUrl.js";

 
// Replace with your backend URL
const socket = io(backedurl);

export default socket;
