const app = getApp()
Page({
    data: {
       // loading
        loadhidden: false,
        introduction : {},  //问题内容
        winHeight: app.globalData.winHeight,
        // 是否解决
        isResolve:true,
        // 官方回复
        questionCost:false,
        comments:[
          {
            likes:"111",
            content:"保险就是当时是",
            times:"2017-12-10",
            author:"GODOG"
          },
          {
            likes: "111",
            content: "保险就是当时是",
            times: "2017-12-10",
            author: "GODOG"
          }
        ],
        /**
        * 分享配置
        */
        shareShow: 'none',
        shareOpacity: {},
        shareBottom: {},
        userType: app.cache.userInfo.userType || ''
    },
    onLoad: function( options ) {
      var questionId = options.id
      var that = this
      wx.request({
        url:'http://120.78.89.170/boutique/list' ,
        data: {
          key: 'haiqian',
          questionId: questionId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data.data[0])
          that.setData({
            introduction: res.data.data[0]
          })
        }
      })
      

    },
 
    /**
    * 显示分享
    */
    showShare: function (e) {

      // 创建动画
      var animation = wx.createAnimation({
        duration: 100,
        timingFunction: "ease",
      })
      this.animation = animation;

      var that = this;
      that.setData({
        shareShow: "block",
      });

        that.animation.bottom(0).step();
        that.setData({
          shareBottom: animation.export()
        });

      // 遮罩层
        that.animation.opacity(0.5).step();
        that.setData({
          shareOpacity: animation.export()
        });

    },

    /**
     * 关闭分享
     */
    shareClose: function () {
      // 创建动画
      var animation = wx.createAnimation({
        duration: 0,
        timingFunction: "ease"
      })
      this.animation = animation;

      var that = this;

        that.animation.bottom(-210).step();
        that.setData({
          shareBottom: animation.export()
        });
 
        that.animation.opacity(0).step();
        that.setData({
          shareOpacity: animation.export()
        });
 
        that.setData({
          shareShow: "none",
        });
    },
 

    onReady: function () {
      var that = this;
      // 数据加载完成后 延迟隐藏loading
      setTimeout(function () {
        that.setData({
          loadhidden: true
        })
      }, 500);
    },
    
    onShow: function() {
        // 页面显示
    },
    
    // 满意案例
    agree:function(){

    },

    // 不满意案例
    disagree:function(){
      
    }
})