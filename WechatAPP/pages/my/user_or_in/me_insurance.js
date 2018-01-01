// pages/my/history_question/history_question
const app = getApp()

Page({
  data: {
    group: [{}],
    n: ''
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log("提问问题者编号")
        console.log(res.data)
        wx.request({
          url: "http://120.78.89.170/question/list",
          method: "POST",
          data: {
            key: "haiqian",
            userId: res.data
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
          success: function (res) {
            console.log(res)
            that.setData({
              group: res.data.data,
              n: res.data.data.length
            })
          }
        })
      },

    })
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },

})