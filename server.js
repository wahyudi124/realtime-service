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


      socket.on('control_data', data => {
        io.in('room_control').emit('control_datas',data)
      })
  
      socket.on('rectifier_in_data', data =>{
        io.in('room_rectifier').emit('rectifier_datas',data)
      })

      socket.on('ups_in_data', data =>{
        io.in('room_ups').emit('ups_datas',data)
      })

      socket.on('pdu_in_data', data =>{
        io.in('room_pdu').emit('pdu_datas',data)
      })

      socket.on('battery_in_data', data =>{
        io.in('room_battery').emit('battery_datas',data)
      })

      socket.on('aircond_in_data', data =>{
        io.in('room_aircond').emit('aircond_datas',data)
      })

      socket.on('sensor_in_data', data =>{
        io.in('room_sensor').emit('sensor_datas',data)
      })

      socket.on('gpio_monitor_in_data', data =>{
        io.in('room_gpio_monitor').emit('gpio_datas',data)
      })

      console.log(socket.id)
});