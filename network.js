import { io } from "https://cdn.socket.io/4.0.1/socket.io.esm.min.js";

const socket = io();

socket.on("connect", () => {
    console.log("Connected to server");
    // Additional multiplayer setup
});

socket.on("player-update", (data) => {
    // Handle player updates
});
