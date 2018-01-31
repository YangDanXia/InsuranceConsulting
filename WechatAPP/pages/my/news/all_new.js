// pages/my/news/all_new/all_new.js
Page({
  data: {
    title:'',
    concreteness:'',
    who:'',
    response:'',
    TYPE:'',
    items: [
      { name: '0', value: '满意' },
      { name: '1', value: '不满意' },
    ],
  },
  onLoad: function (options) {
  },
  onReady: function () {},
  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'new',
      success: function (res) {
        that.setData({
          title: res.data.questionTitle,
          concreteness: res.data.questionDetail,
          response: res.data.questionReply,
          TYPE:res.data.questionType,
          TIME:res.data.questionTime
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
  onShareAppMessage: function () {
  }
})