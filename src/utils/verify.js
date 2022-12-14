
// function validatePass2 (rule, value, callback) {
//   console.log(this)
//   if (value === '') {
//     callback(new Error('请再次输入密码'))
//   } else if (value !== this.ruleForm2.pass) {
//     callback(new Error('两次输入密码不一致!'))
//   } else {
//     callback()
//   };
// }
const validatePass = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}
// function validatePass (rule, value, callback) {
//   if (value === '') {
//     callback(new Error('请输入密码'))
//   } else {
//     if (this.ruleForm2.checkPass !== '') {
//       this.$refs.ruleForm2.validateField('checkPass')
//     }
//     callback()
//   }
// }
const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('年龄不能为空'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字值'))
    } else {
      if (value < 18) {
        callback(new Error('必须年满18岁'))
      } else {
        callback()
      }
    }
  }, 1000)
}

// function checkAge (rule, value, callback) {
//   if (!value) {
//     return callback(new Error('年龄不能为空'))
//   }
//   setTimeout(() => {
//     if (!Number.isInteger(value)) {
//       callback(new Error('请输入数字值'))
//     } else {
//       if (value < 18) {
//         callback(new Error('必须年满18岁'))
//       } else {
//         callback()
//       }
//     }
//   }, 1000)
// }
export {
  // validatePass2,
  validatePass,
  checkAge
}
