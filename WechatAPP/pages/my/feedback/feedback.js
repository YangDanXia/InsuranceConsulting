// pages/my/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback_Content:'',
    feedback_Way:''
  
  },
  get_feedback:function(e){
    this.setData({
      feedback_Content: e.detail.value
    })
  },
  get_input: function (e) {
    this.setData({
      feedback_Way: e.detail.value
    })
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
  getbutton:function(e){
    var that=this;
    if(this.data.feedback_Content.length==0)
    {
      wx.showToast({
        title: '意见不能为空~',
        image:"../../../image/icon/warn.png",
        duration: 2000
      })
    }
    else if (this.data.feedback_Way.length == 0)
    {
      wx.showToast({
        title: '要填写联系方式哦',
        icon: 'loading',
        duration: 2000
      })
    }
    else{
      wx.showToast({
        title: '提交成功',
        icon:'success',
        duration: 2000
      })
    }
  }
})