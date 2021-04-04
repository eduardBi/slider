const Websocket=require('ws');
const http=require('http');
const express=require('express')


const server=http.createServer(express)
const wss= new Websocket.Server({server});
wss.on('connection',(ws)=>{
    ws.on('message',(data)=>{
        wss.clients.forEach((client)=>{
            if(client!==ws && client.readyState===Websocket.OPEN){
                client.send(data);
            }
        })
    })
})

server.listen(6969,()=>{
    console.log('here')
})