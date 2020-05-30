const net = require('net')
const pageids = [
    '11111',
    '22222',
    '33333',
    '4444'
]
const socket = new net.Socket({})

socket.connect({
    host: '127.0.0.1',
    port: 4000
})


let buffer = Buffer.alloc(4)
let index = Math.floor(Math.random() * pageids.length)
buffer.writeInt32BE(
    pageids[index]
)

socket.write(buffer)

socket.on('data', (buffer) => {
    console.log(pageids[index], buffer.toString());
    buffer = Buffer.alloc(4)
    index = Math.floor(Math.random() * pageids.length)
    buffer.writeInt32BE(
        pageids[index]
    )

    socket.write(buffer)

})