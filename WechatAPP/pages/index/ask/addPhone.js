// pages/me/account/findPassword.js
var app = getApp();
var that = this;
var userPhone;
var codeNumber;
var code;
var countdown = 60;
var settime = function (that) {
  if (countdown == 0) {
    that.setData({
      toSend: true
    })
    countdown = 60;
    return;
  } else {
    that.setData({
      toSend: false,
      second: countdown
    })

    countdown--;
  }
  setTimeout(function () {
    settime(that)
  }
    , 1000)
}


Page({
  data: {
    toSend: true,
    second: 60
  },

  onLoad:function(){
    wx.showToast({
      title: "请填写手机号码",
      image: '../../../image/icon/warn.png'
    })
  },

  /**
   * 获取用户名的输入
   */
  userPhoneInput: function (e) {
    userPhone = e.detail.value
  },

  /**
   * 发送验证码
   */
  sendCode: function () {
    if (!userPhone) {
      wx.showToast({
        title: "请输入手机号",
        image: '../../../image/icon/warn.png'
      })
      return false;
    }
    codeNumber = app.getRandom();
    console.log(userPhone)
    console.log(codeNumber)

    var that = this;
    settime(that);
    wx.request({
      url: 'http://120.78.89.170/code',
      data: {
        key: 'haiqian',
        mobile:userPhone,
        content: codeNumber
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data);
        // if (res.data.code != "200") {
        //   wx.showToast({
        //     title: res.data.msg,
        //     image: "../../../image/icon/warn.png"
        //   })
        // }
      }
    })
  },


  /**
   * 获取验证码的输入
   */
  codeInput: function (e) {
    code = e.detail.value
  },

  /**
   * 点击添加手机号码
   */
  login: function () {
    var info = app.cache.userInfo || {}
    var information = new Array(userPhone, code);
    for (var x = 0; x < 2; x++) {
      if (!information[x]) {
        wx.showToast({
          title: "请填写完整信息",
          image: '../../../image/icon/warn.png'
        })
        return false;
      }
    }
    if (code != codeNumber) {
      wx.showToast({
        title: "验证码错误！",
        image: '../../../image/icon/warn.png'
      })
      return false;
    }
    /**
     * 连接数据库
     */
    wx.request({
      url:'http://120.78.89.170/Phone',
      data:{
        key:'haiqian',
        userId:app.cache.userInfo.userId,
        userPhone:userPhone
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method: 'POST',
      success:function(res){
        console.log(res)
        var info = app.cache.userInfo
        info.phoneNumber = userPhone
        console.log(info)
        app.saveCache("userInfo",info)
        wx.navigateBack({
          url: 'question'
        })
      }
    })

  },

//  取消操作
  confirm:function(){
    wx.switchTab({
      url: '../index'
    })
  }

})