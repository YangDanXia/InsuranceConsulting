//app.js
var timer;
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    var that = this
    logs.unshift(Date.now())

    wx.getSystemInfo({
      success: function (res) {
        that.globalData.width = res.windowWidth
        that.globalData.winHeight = res.windowHeight
        that.globalData.scrHeight = res.screenHeight
      }
    });
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx144ac6748a028520&secret=988cdef945e5fdb98df88d422257b5e6&js_code='+res.code+'&grant_type=authorization_code',
          success:function(res){
            that.saveCache("openid",res.data.openid)
          }
        })
      }
    })
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    /**
   * 读取缓存
   */
    try {
      var data = wx.getStorageInfoSync();
      if (data && data.keys.length) {
        data.keys.forEach(function (key) {
          var value = wx.getStorageSync(key);
          if (value) {
            that.cache[key] = value;
          }
        });
      
      }
    } catch (e) {
      console.warn('获取缓存失败');
    }
  },

  /**
   * 保存缓存
   */
  saveCache: function (key, value) {
    if (!key) {
      return false;
    }
    this.cache[key] = value;
    wx.setStorage({
      key: key,
      data: value,
    })
    return true;
  },


  /**
   * 清理缓存
   */
  removeCache: function (key) {
    if (!key) { return false; }
    this.cache[key] = '';
    wx.removeStorage({
      key: key
    });
  },
  /**
 * 获取随机数
 */
  getRandom: function () {
    var num = "";
    for (var i = 0; i < 4; i++) {
      num += Math.floor(Math.random() * 10)
    } 
    return num;
  },
  
  //缓存内容
  cache: {},
  globalData: {
    userInfo: null,
    id: '',
    question: '',
    content: '',
    topic_userNickName:'',//话题讨论，下面评价的用户昵称
    topic_userPicture: '',//话题讨论，下面评价的用户头像
    topic_commentContent: '',//话题讨论，下面评价的用户内容
    topic_commentCreateTime: '',//话题讨论，下面评价的用户时间
  }
})