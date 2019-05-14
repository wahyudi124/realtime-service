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
        io.in('room_rectifier').emit('rectifier_datas',data)
      })

      socket.on('ups_in_data', data =>{
        io.in('room_ups').emit('ups_datas',data)
      })
      console.log(socket.id)
});