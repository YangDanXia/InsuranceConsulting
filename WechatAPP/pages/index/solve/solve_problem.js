// pages/index/solve/solve_problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ID:1,
    sort: [
    {
      id:1,
      name:'人寿保险'
    },
      {
        id: 2,
        name: '医疗保险'
      },
      {
        id: 3,
        name: '社保'
      },
      {
        id: 4,
        name: '理财保险'
      },
      {
        id: 5,
        name: '少儿保险'
      },
      {
        id: 6,
        name: '意外保险'
      },
      {
        id: 7,
        name: '养老保险'
      },
      {
        id: 8,
        name: '保险流程'
      },
    ]
  
  },
  leftTab:function(event){
    console.log("this.data.ID")
    var id=event.currentTarget.id
    this.setData({
      ID:id
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
  answer_qusetion:function(){
    wx.navigateTo({
      url: 'answer/answer_question',
    })
  }
})