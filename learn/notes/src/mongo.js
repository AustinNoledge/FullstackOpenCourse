const mongoose = require("mongoose")

if ( process.argv.length<3 ) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
// db名称不存在时自动创建
const url =
    `mongodb+srv://fullstack:${password}@cluster0.zdywu.mongodb.net/dbtest?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

// 创建数据格式
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

// （模型 = 构造函数）
const Note = mongoose.model('SingleNote', noteSchema)

// 创建一行数据测试
const note = new Note({
    content: 'HTML is Easy',
    date: new Date(),
    important: true,
})

note.save().then(result => {
    console.log('note saved!')
    // 必须关闭连接
    mongoose.connection.close()
})

Note.find({}).then(result => {
    result.forEach(each => {
        console.log(each)
    })
    mongoose.connection.close()
})