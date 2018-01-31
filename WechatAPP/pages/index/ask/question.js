// pages/me/functions/recommend.js
//获取应用实例
var app = getApp();
var title ='';
var content = '';
var image=[];
var questionType='';
var questionCost='';
Page({
  data: {
    feeType: ["付费回答", "免费回答"],
    index_fee: 0,
    img: ["../../../image/icon/addPhoto.png"],
    questionArray: ["人寿保险","健康保险","少儿保险","养老保险","意外保险","财产保险"],
    index_q: 0,
    isPublic: ["不同意", "同意"],
    index_public: 1
  },

  onLoad:function(){
  },

  onShow:function(){    
    var phone = app.cache.userInfo.phoneNumber
    if (phone == '') {
      wx.navigateTo({
        url: 'addPhone'
      })
    }
  },

  /**
   * 获取费用类型
   */
  changeFee: function (e) {
    this.setData({
      index_fee: e.detail.value
    })
    questionCost = e.detail.value
  },


 /**
   * 获取问题类型
   */
  changeQuestion: function (e) {
    var index = e.detail.value
    this.setData({
      index_q: index
    })
    questionType = this.data.questionArray[index]
  },

/**
 * 获取公开类型
 */
  changePublic: function (e) {
    this.setData({
      index_public: e.detail.value
    })
  },


  /**
   * 上传本地照片1
   */
  chooseImg: function (e) {
    var index = e.currentTarget.dataset.index
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: 'compressed', // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        image = that.data.img
        image[index] = res.tempFilePaths[0]
        if(index == image.length-1){
          image.push("../../../image/icon/addPhoto.png")
        }
        that.setData({
          img: image
        })
      }
    })
  },
 
  titleInput:function(e){
   title = e.detail.value
  },

  detailInput: function (e) {
    content = e.detail.value
  },

  submit:function(e){
    var that = this
    if(title =='' || content ==''){
      wx.showToast({
        title: "标题和内容必填",
        image: "../../../image/icon/warn.png"
      })
    }else if(image.length > 0){
        var sum =0;
        var imagePath = [];
        for (var i = 0; i < image.length - 1; i++) {
          wx.uploadFile({
            url: 'http://120.78.89.170/upload',
            filePath: image[i],
            name: 'photo',
            success: function (res) {
              console.log(res)
              imagePath[i] = "http://120.78.89.170/Public/Image/"+res.data
              ++sum;
              if (sum == image.length - 1) {
                wx.request({
                  url: 'http://120.78.89.170/user/ask',
                  data:{
                    key:"haiqian",
                    userId:app.cache.userInfo.userId,
                    questionType:questionType,
                    questionTitle:title,
                    questionDetail:content,
                    questionPhoto:imagePath,
                    questionCost:questionCost
                  },
                  header:{
                    'content-type':'application/x-www-form-urlencoded;charset=utf-8'
                  },
                  method:'POST',
                  success:function(res){
                     console.log(res)
                     wx.showToast({
                       title: '提交成功',
                       icon: 'success',
                       duration: 3000,
                       success: function () {
                         setTimeout(function () {
                           wx.switchTab({
                             url: '../index',
                           }), 3000
                         })
                       }
                     })
                  }
                })
              }
            }
          })
        }

    }else{
        wx.request({
          url: 'http://120.78.89.170/user/ask',
          data: {
            key: "haiqian",
            userId: app.cache.userInfo.userId,
            questionType: questionType,
            questionTitle: title,
            questionDetail: content,
            questionCost: questionCost
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          method: 'POST',
          success: function (res) {
             console.log(res)
             wx.showToast({
                 title: '提交成功',
                 icon: 'success',
                 duration: 2000,
                 complete:function(){
                   setTimeout(function () 
                   {
                     wx.switchTab({
                       url: '../index',
                     }),7000})
                 }
              })

          }
        })
    }


  }
})