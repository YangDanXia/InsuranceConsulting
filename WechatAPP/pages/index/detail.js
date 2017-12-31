const app = getApp()
Page( {
    data: {
        comments : [],  //问题内容
        winHeight: app.globalData.winHeight,

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
            comments: res.data.data[0]
          })
        }
      })
      

    },
 
 
 

    onReady: function() {
      
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