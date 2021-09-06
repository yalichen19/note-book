const article = {
    title: "文章标题",
    content: "文章内容",
    comments: [{
        content: "评论1",
        user: {
            id: 1,
            name: "用户名1"
        }
    }, {
        content: "评论2",
        user: {
            id: 2,
            name: "用户名2"
        }
    }]
}

//解构出第二条评论的用户名和评论内容
// name:"用户名2"  content:"评论2"

// const {
//     comments: [, {
//         content,
//         user: {
//             name
//         }
//     }]
// } = article;

// const [, {
//     content,
//     user: {
//         name
//     }
// }] = article.comments;

const {
    content,
    user: {
        name
    }
} = article.comments[1]

console.log(content, name)