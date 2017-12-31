const app = getApp()
var that=this;
Page({
  data: {
    e:true,
    con:false,
    userInfo: {},
    hasUserInfo: false,
    userid:'',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    adminType:'',
    // condition:true,
    what:''//消息的个数
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } 
    else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          var info = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          wx.request({
            url: "http://120.78.89.170/user/add",
            method: "POST",
            data: {
              userNickName: info.nickName,
              userPicture: info.avatarUrl,
              userWechatId: app.globalData.openid,
              key:"haiqian"
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            success: function (res) {
              that.setData({
                userid: res.data.data.userId,
                adminType:res.data.data.adminType
              })
              var userInfo = {
                userId: res.data.data.userId,
                nickName: info.nickName,
                avatarUrl: info.avatarUrl,
                userType: "generalUser"
              }
              app.saveCache("userInfo", userInfo)
            },
            fail: function (d) {
              console.log("fail")
            },
          })

        }
            
      })

    }
  
  },

  tohistory_question:function(){
    wx.navigateTo({
      url: 'user_or_in/me_user'
    })
  },

  
  gotofeedback:function(){
    wx.navigateTo({
      url: 'feedback/feedback',
    })
  },


  gotonews:function(){
    // if(接收的消息代表==0)
    // {
    //   wx.navigateTo({
    //     url: '../my/black_xx/black_xx',
    //   })
    // }
    // else
    // {
      wx.navigateTo({
      url: 'news/news',
    })
    // }
  },


  tohistory_answer:function() {
    wx.navigateTo({
      url: 'user_or_in/me_insurance'
    })
  },


  gotoinsurance: function () {
    wx.navigateTo({
      url: 'insurance_consultant/insurance_consultant'
    })
  },

})
