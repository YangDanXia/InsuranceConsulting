const app = getApp()
Page({
  data: {
    group: [{}],
    questionTitle:'',
    questionDetail:'',
    n: '',
    control: false
  },
  
  //图标的显示
  handleTap1: function () {
    this.setData({
      control: true
    })
  },

//图标的隐藏
  handleTap2: function () {
    this.setData({
      control: false
    })
  },

  //获取下标及当前下标和内容
  gotoall:function(event){
    var id = event.currentTarget.id
    app.globalData.id = id
    console.log("当前数组下标")
    console.log(id)
    app.globalData.question = this.data.group[id].questionTitle
   app.globalData.content = this.data.group[id].questionDetail
    wx.navigateTo({
      url: '/pages/my/user_or_in/all/user_new',
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
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log("提问问题者编号")
        console.log(res.data.userId) 
        wx.request({
          url: "http://120.78.89.170/question/list",
          method: "POST",
          data: {
            key: "haiqian",
            userId: res.data.userId
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
  }
})
