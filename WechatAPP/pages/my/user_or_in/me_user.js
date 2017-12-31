// pages/my/history_question/history_question
const app = getApp()

Page({
  data: {
    group: [{}],
    // questiontitle:'',
    // questiondetail:''
    n: ''
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'adduserId',
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

})