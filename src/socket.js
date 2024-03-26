import { io } from "socket.io-client"

// Determine the socket URL based on the environment (development or production)
const socketUrl = import.meta.env.MODE === "development" ? "http://localhost:3000" : "/"

// Create a socket instance
const socket = io(socketUrl)

export default socket
