
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
    answ:'',
    id:'',
    P:'',
    comment:'',//说说你的看法输入的内容
    xianshi:true
  }, 
  godiscuss_all:function(event){
    var that=this
    var Id=event.currentTarget.id
    that.setData({
      id:Id
    })
    app.globalData.topic_userNickName=that.data.answ[that.data.id].userNickName
    app.globalData.topic_userPicture = that.data.answ[that.data.id].userPicture
    app.globalData.topic_commentContent = that.data.answ[that.data.id].commentContent
    app.globalData.topic_commentCreateTime = that.data.answ[that.data.id].commentCreateTime
    wx.navigateTo({
      url: 'discussAll/discuss_all',
    })
  },
  onLoad: function (options) {
    
    var id = options.id
    console.log("onload")
    console.log(id)
    var that=this
    wx.request({
      url: 'http://120.78.89.170/topic/select',
      data: {
        key: 'haiqian',
        topicId:id
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      success: function (res){
        console.log("返回")
        console.log(res)
        console.log()
        that.setData({
          P: res.data[0].topicPicture,
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
    this.setData({
      comment: e.detail.value,
    })
  },
  sendcomment: function (e) {
    var that = this
    if (that.data.comment == '') {
      wx.showToast({
        title: "请输入内容",
        image: "../../image/icon/warn.png"
      })
    } 
    else {
      console.log(app.cache.userInfo.userId)
      wx.request({
        url: 'http://120.78.89.170/comment/add',
        data: {
          key: "haiqian",
          userId: app.cache.userInfo.userId,
          commentContent: that.data.comment,
          topicId: topicId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        method: 'POST',
        success: function (res) {
          wx.showToast({
            icon:'success',
            title: '提交成功！',
            duration:2000
          })
       
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
    wx.setStorage({
      key: 'topic',
      data: that.data.answ,
    })
  }

})
