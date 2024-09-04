import { io } from "socket.io-client";
import { backedurl } from "../redux/backedUrl";
 
const socket = io(backedurl, {
    transports: ["websocket"],
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  });; 

export default socket;
