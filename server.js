var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(5001);

io.on('connection', function (socket) {
    socket.on('join_room', room =>{
        socket.join(room)
      })
  
      socket.on('leave_room', room =>{
        socket.leave(room)
      })
  
      socket.on('rectifier_in_data', data =>{
        io.emit('rectifier_datas',data)
      })

      socket.on('ups_in_data', data =>{
        io.emit('ups_data',data)
      })
      console.log(socket.id)
});