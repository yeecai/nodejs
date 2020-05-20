const buffer1 = Buffer.from('yeecai')
const buffer2 = Buffer.from([1,2,3,4,55])

const buffer3 = Buffer.alloc(10)

console.log(buffer1, buffer2, buffer3);

buffer2.writeInt8(12,1)

console.log(buffer2);

buffer2.writeInt16LE(512,2)
console.log(buffer2);

const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto' , 'utf-8'))

console.log(schema);

const buffer = schema.Repo.encode({
    id : 1,
    name: 'Node.js',
    time: 0.4
});

console.log(schema.Repo.decode(buffer));

