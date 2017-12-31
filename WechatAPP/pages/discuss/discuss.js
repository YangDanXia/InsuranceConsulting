//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      "/pages/image/one.jpg",
      "/pages/image/two.jpg" ,
      "/pages/image/three.jpg"      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    showView: true 
  },
  toast: function () {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  tosort: function () {
    wx.navigateTo({
      url: '../sort/sort'
    })
  },
  tozhuce: function () {
    wx.navigateTo({
      url: '../zhuce/zhuce'
    })
  },
  toanli: function () {
    wx.navigateTo({
      url: '../anli/anli'
    })
  },
  todiscuss_again: function () {
    wx.navigateTo({
      url: '../discuss_again/discuss_again'
    })
  },
  //事件处理函数

  onLoad: function (options) {
    // 生命周期函数--监听页面加载  
    showView: (options.showView == "true" ? true : false)
    },
    onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }  
 

})
