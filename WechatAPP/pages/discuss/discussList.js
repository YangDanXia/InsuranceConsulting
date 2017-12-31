// pages/discuss/discuss.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    wx.request({
      url: 'http://120.78.89.170/topic/list',
      data:{
        key:'haiqian'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      method: 'POST',
      success:function(res){
        that.setData({
          topicList:res.data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  todiscuss_all: function () {
    wx.navigateTo({
      url: '../discuss_all/discuss_all'
    })
  },
  totake_part: function () {
    wx.navigateTo({
      url: '../take_part/take_part',
      success: function (res) {
      }
    })
  },
})