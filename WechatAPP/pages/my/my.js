// my.js
const app = getApp()
var that=this;
Page({
  data: {
    con:false,//有消息
    what: '',//消息的个数
    userInfo: {},
    hasUserInfo: false,
    userid:'',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // condition:true,
    history_problem:'',//历史提问
    history_answer:'',//历史回答
    Type:true//判断是否成为保险顾问
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        // 获取头像和昵称
        that.setData({
          userInfo:res.data
        })
        // 判断普通用户还是保险顾问
        var people=res.data.userType
        if(people=="generalUser")
        {
          that.setData({
            history_problem:true,
            history_answer:false
          })
        }
        else{
          that.setData({
            Type: false,
            history_problem: false,
            history_answer: true
          })
        }
      },
    })
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
