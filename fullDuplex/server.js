const net = require('net')
const data = {
    11111: 'aaaaa',
    22222: 'bbbbb',
    33333: 'ccccc',
    4444: 'dddd'
}
const server = net.createServer((socket) => {
    socket.on('data', function (buffer) {
        console.log(buffer);
        const seqBuffer = buffer.slice(0, 2)
        const pageid = buffer.readInt32BE(2)
        setTimeout(() => {
            const buffer = Buffer.concat([
                seqBuffer,
                Buffer.from(data[pageid])
            ])
            socket.write(
                buffer
            )
        }, 10 * Math.random() * 1000)
    })
})

server.listen(4000)

