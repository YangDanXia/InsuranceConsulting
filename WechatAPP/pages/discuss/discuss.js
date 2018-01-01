//index.js
//获取应用实例
const app = getApp()
var comment=''
var topicId=''
Page({
  data: {
    // loading
    loadhidden: false,
    title:'',
    date:'12-29',
    bodytext:'',
    sendflag:0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    showView: true,
    topicId:1,
    // comment:''
  }, 

  onLoad: function (options) {
    var id = options.id
    var that=this
    wx.request({
      url: 'http://120.78.89.170/topic/now',
      data: {
        key: 'haiqian'
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          title: res.data[0].topicTitle,
          topicId: res.data[0].topicId,
          date: res.data[0].gmt_modified,
          bodytext: res.data[0].topicContent,
          answ:res.data[1]
        })
      }
      })


  },


  commentInput: function (e) {
    // this.setData({
    //   comment:
    // })
    comment=e.detail.value
  },
  


  sendcomment: function (e) {
    var that = this
    if (comment == '') {
      wx.showToast({
        title: "请输入内容",
        image: "../../image/icon/warn.png"
      })
    } else {
      wx.request({
        url: 'http://120.78.89.170/comment/add',
        data: {
          key: "haiqian",
          userId: app.cache.userId,
          commentContent: comment,
          topicId: topicId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        method: 'POST',
        success: function (res) {
          console.log('12324'),
          console.log(res)
        }
      })
    }
  },


  







  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    // 数据加载完成后 延迟隐藏loading
    setTimeout(function () {
      that.setData({
        loadhidden: true
      })
    }, 500);
  }

})
