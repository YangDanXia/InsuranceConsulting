//index.js
var app = getApp();

Page({
  userInfo: {},
  canIUse: wx.canIUse('button.open-type.getUserInfo'),
  /**
   * 页面的初始数据
   */
  data: {
    // loading
    loadhidden: false,
    imgUrls: [
      "../../image/show/one.jpg",
      "../../image/show/two.jpg",
      "../../image/show/three.jpg"
    ],
    usertype1:'',
    usertype2:'',
    circular:true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    TypeUp:[
      {
        url:'case/classicCase',
        img:"../../image/icon/exp.png",
        text:"精品案例"
      },
      {
        url: 'ask/question',
        img: "../../image/icon/discuss.png",
        text: "发起提问"
      },
      {
        url: '../my/insurance_consultant/insurance_consultant',
        img: "../../image/icon/quiz.png",
        text: "成为顾问"
      }
    ],
    typeup: [
      {
        url: 'case/classicCase',
        img: "../../image/icon/exp.png",
        text: "精品案例"
      },
      {
        url: 'ask/question',
        img: "../../image/icon/discuss.png",
        text: "发起提问"
      },
      {
        url: '../index/solve/solve_problem',
        img: "../../image/icon/quiz.png",
        text: "回答问题"
      }
    ],
    errHidden:true,
    commendItems:[]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          var info = res.userInfo
          wx.request({
            url: 'http://120.78.89.170/user/add',
            data: {
              key: 'haiqian',
              userWechatId:app.cache.openid,
              userNickName: info.nickName,
              userPicture: info.avatarUrl,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            method: 'POST',
            success: function (res) {
              console.log(res)
              var userInfo = {
                userId:res.data.data.userId,
                nickName: info.nickName,
                avatarUrl: info.avatarUrl,
                phoneNumber:'',
                userType: "generalUser"
              }
              app.saveCache("userInfo", userInfo)
                //获取缓存中的用户类型
              wx.getStorage({
                key: 'userInfo',
                success: function (res) {
                  var Type = res.data.userType
                  if (Type == "generalUser") {
                    that.setData({
                      usertype1: true,
                    })
                    console.log("that.data.usertype1")
                    console.log(that.data.usertype1)
                  }
                  else {
                    that.setData({
                      usertype2: true,
                    })
                  }
                },

              })
            }
          })
        }
             })
    }
    // 获得案例内容
    wx.request({
      url:'http://120.78.89.170/boutique/list' ,
      data:{
        key:'haiqian'
      },
     header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      method: 'POST',
      success:function(res){
        var array=[];
        for(var i=0;i<4;i++){
           array[i] = res.data.data[i] 
        }
        that.setData({
          commendItems:array
        })
      }
    })
  
    },

  /**
* 生命周期函数--监听页面初次渲染完成
*/
  onReady: function () {
    var that = this;
    // 数据加载完成后 延迟隐藏loading
    setTimeout(function () {
      that.setData({
        loadhidden: true
      })
    }, 500);
  },

    /**
     * 搜索
     */
  search:function(){
    wx.navigateTo({
      url: 'search/search'
    })
  },

  /**
   * 提问
   */
  question:function(){
    wx.navigateTo({
      url: 'ask/question'
    })
  }
})