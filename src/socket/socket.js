import { io } from "socket.io-client";
import { backedurl } from "../redux/backedUrl";
 
const socket = io(backedurl); 

export default socket;
