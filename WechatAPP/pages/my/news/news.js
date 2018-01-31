// pages/discuss/discuss.js
var app = getApp()
Page({
  data: {
    list: [{}],
    question_Title:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 接受消息列表
   */
  onShow: function () {
    var that = this
    wx.request({
      url: 'http://120.78.89.170/newList',
      data: {
        key: 'haiqian',
        userId: 1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        that.setData({
          list: res.data
        })
        console.log("list")
        console.log(that.data.list)
      }
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  toall_new: function (event) {
    var ID=event.currentTarget.id
    var questionID=this.data.list[ID].questionId
    wx.request({
      url: 'http://120.78.89.170/newRead',
      data: {
        key: 'haiqian',
        questionId: questionID
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      method: 'POST',
      success: function (res) {
        console.log("a发送问题编号返回")
        console.log(res)
        wx.setStorage({
          key: 'new',
          data: res.data
        })
      },
    })
    wx.navigateTo({
      url: 'all_new'
    })
  },
})