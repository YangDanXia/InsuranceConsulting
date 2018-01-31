// my.js
const app = getApp()

var that=this;
Page({
  data: {
    con:false,//有消息
    msgNumber: '',//消息的个数
    userInfo: {},
    hasUserInfo: false,
    userid:'',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    history_problem:'',//历史提问
    history_answer:'',//历史回答
    Type:true//判断是否成为保险顾问
  },
  //事件处理函数
  onLoad: function () {
    var UserId=''
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        console.log("获取个人信息缓存")
        console.log(res.data)
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
      }
    })

  },
  onShow:function(){
    var that=this
    wx.request({
      url: 'http://120.78.89.170/newNum',
      data: {
        key: 'haiqian',
        userId: 1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      method: 'POST',
      success: function (res) {
        var geshu=res.data.count
        console.log(geshu)
        if (geshu==0)
        {
          that.setData({
            con: false,
          })
        }
        else{
          that.setData({
            con: true,
            msgNumber: geshu
          })
        }
      }
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
  //消息
  gotonews:function(){
    if(this.data.con==false)
    {
      // wx.navigateTo({
      //   url: 'black/black_xx',
      // })
      wx.navigateTo({
        url: 'news/news',
      })
    }
    else
    {
      wx.navigateTo({
        url: 'news/news',
      })
      this.setData({
        con:false
      })
    }
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
