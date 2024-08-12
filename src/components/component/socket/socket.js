import { io } from "socket.io-client";

// Replace with your backend URL
const socket = io("http://localhost:4000");

export default socket;
