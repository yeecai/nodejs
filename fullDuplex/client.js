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


let index = Math.floor(Math.random() * pageids.length)

socket.on('data', (buffer) => {

    const seqBuffer = buffer.slice(0, 2)
    const titleBuffer = buffer.slice(2)
    console.log(seqBuffer.readInt16BE(), titleBuffer.toString());

    index = Math.floor(Math.random() * pageids.length)
    socket.write(encode(index))
})

let seq = 0
function encode(index) {
    let buffer = Buffer.alloc(6)
    buffer.writeInt16BE(seq)
    buffer.writeInt32BE(
        pageids[index], 2
    )
    console.log(seq, pageids[index]);
    seq++
    return buffer
}
setInterval(() => {
    index = Math.floor(Math.random() * pageids.length)
    socket.write(encode(index))
}, 500);

// need a seqId to be full duplex
// need to deal with 沾包 and 不完整包， 错误处理