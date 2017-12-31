//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    winHeight: app.globalData.winHeight,
    caseList:[],
    showType:"all"
  },


  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://120.78.89.170/boutique/list',
      data: {
        key: 'haiqian'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          caseList:res.data.data
        })
      }
    })
  },

 /**
  * 选择保险类型
  */
  selectType:function(e){
    // console.log(e.currentTarget.dataset.name)
    var value = e.currentTarget.dataset.name
    var showNotice =true
    for(var i=0;i<this.data.caseList.length;i++){
      if(value == this.data.caseList[i].questionType){
         showNotice = false
      }
    }
    this.setData({
      showType: e.currentTarget.dataset.name,
      showNotice:showNotice
    })
  }
})
