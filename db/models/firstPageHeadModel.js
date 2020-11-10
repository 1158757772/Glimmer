const mongoose = require('mongoose')

// 创建一个与数据集合(表)相关的schema对象
const firstPageHeadSchema = mongoose.Schema({
  data: { type: Object, required: false }
})

// 把schema对象转换成与数据集合相关的数据模型
const firstPageHead = mongoose.model('firstpageheader', firstPageHeadSchema)

module.exports = firstPageHead
