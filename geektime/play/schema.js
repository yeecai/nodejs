const { buildSchema } = require('graphql')

const fs = require('fs')

const schema = buildSchema(fs.readFileSync(__dirname + '/schema/comment.gql', 'utf-8'))

const commentClient = require('./rpc-client/comment-client')
const likeClient = require('./rpc-client/like-client')

schema.getQueryType().getFields().comment.resolve = () => {
    return new Promise((resolve, reject) => {
        commentClient.write({
            columnid: 0
        }, function(err, res) {
            err ? reject(err): resolve(res.comments)
        }
        )
    })
}

schema.getMutationType().getFields().like.resolve = (args, {id}) => {
    return new Promise((resolve, reject) => {
        likeClient.write({
            commentId: id
        }, function(err, res) {
            err ? reject(err) : resolve(res.likeNum)
        })
    })
}

module.exports = schema