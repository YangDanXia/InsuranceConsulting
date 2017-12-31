var app = getApp()
// var tempFilePaths = new Array();
Page({
  data: {
    UserId: '',
    headpaths: null,//寸照本地图片路径
    photopaths: null,//证件照本地图片路径
    form_Name: '',//输入姓名
    form_Phone: '',//输入手机号
    form_Text: '',//输入工作经历
    tempFilePaths: null,
    Card: '',//证件照本地路径
    zj_number: '',//证件照个数
    Me: '',//寸照本地路径
    Me_back:'',//要给后台的：寸照返回的路径
    Card_back:''//要给后台的：证件照返回的路径
  },
  //获取userId
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'adduserId',
      success: function (res) {
        console.log("sfdefd")
        console.log(res.data)
        that.setData({
          UserId: res.data
        })
      },
    })
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  },
  //输入姓名
  form_name: function (e) {
    this.setData({
      form_Name: e.detail.value,
    })
  },
  //输入手机
  form_phone: function (e) {
    this.setData({
      form_Phone: e.detail.value
    })
  },
  //输入工作经历
  formtext: function (e) {
    this.setData({
      form_Text: e.detail.value
    })
  },
  //本人照片
  gotohead: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认1
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilepaths = res.tempFilePaths;
        that.setData({
          headpaths: tempFilepaths
        })
        console.log("a")
        console.log(that.data.headpaths)
        app.globalData.headImg = res.tempFilePaths
      },
      fail: function (res) {
        //fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  //预览本人照片
  previewImage: function (e) {
    var that = this,
      //获取当前图片的下表
      index = e.currentTarget.dataset.index,
      //数据源
      pictures = app.globalData.headImg;
    wx.previewImage({
      //当前显示下表
      current: pictures[index],
      //数据源
      urls: app.globalData.headImg
    })
  },
  //证件照
  gotophoto: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log("选择成功")
        var photoPaths = res.tempFilePaths;
        that.setData({
          photopaths: photoPaths,
          zj_number: photoPaths.length
        })
        app.globalData.photoImg = res.tempFilePaths
      },
      fail: function (res) {
        //fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  //预览证件照
  PreviewImage: function (e) {
    var that = this,
      //获取当前图片的下表
      index = e.currentTarget.dataset.index,
      //数据源
      pictures = app.globalData.photoImg;
    wx.previewImage({
      //当前显示下表
      current: pictures[index],
      //数据源
      urls: app.globalData.photoImg
    })
  },
  //提交所有数据
  tijiao: function (e) {
    var that = this
    if (this.data.form_Name.length == 0) //判断是否填写姓名
    {
      wx.showToast({
        title: '请填写姓名~',
        icon: 'loading',
        duration: 2000
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    }
    //判断是否填写手机号
    else if (this.data.form_Phone.length == 0) {
      wx.showToast({
        title: '请填写手机号~',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    }
    //判断是否填写工作经历
    else if (this.data.form_Text.length == 0) {
      wx.showToast({
        title: '请填写工作经历',
        icon: 'loading',
        duration: 2000
      })
    }
    //判断是否上传照片，默认1张
    else if (that.data.headpaths==null) {
      wx.showToast({
        title: '没有上传照片',
        icon: 'loading',
        duration: 2000
      })
    }
    //判断是否上传证件照，默认9张
    else if (that.data.photopaths== null) {
      wx.showToast({
        title: '没有上传证件照',
        icon: 'loading',
        duration: 2000
      })
    }

    //进入上传所有数据
    else {
      //上传寸照
      wx.uploadFile({
        url: 'http://120.78.89.170/upload',
        filePath: that.data.headpaths[0],
        name: 'consultantProof',
        success: function (res) {
          that.setData({
            Me_back:res.data
          })
          //给后台发送返回来的图片地址
          wx.request({
            url: "http://120.78.89.170/consultant/add",
            method: "POST",
            data: {
              key: "haiqian",
              consultantPhoto:that.data.Me_back
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            success: function (res) {     
            },
            fail: function (d) {
              console.log("fail")
            },

          })
        }
      })
      //上传证件照
      for (var i = 0; i < that.data.zj_number; i++) {
        wx.uploadFile({
          url: 'http://120.78.89.170/upload',
          filePath: that.data.photopaths[i],
          name: 'consultantProof',
          success: function (res) {
            console.log("上传证件照")
            console.log(res)
            that.setData({
              Card_back:res.data
            })
            //给后台发送证件照返回来的地址
            wx.request({
              url: "http://120.78.89.170/consultant/add",
              method: "POST",
              data: {
                key: "haiqian",
                consultantProof:that.data.Card_back
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
              },
              success: function (res) {
              },
              fail: function (d) {
                console.log("fail")
              },

            })
          }
        })

      }
      //给后台发送姓名、手机号、工作经历
      wx.request({
        url: "http://120.78.89.170/consultant/add",
        method: "POST",
        data: {
          key: "haiqian",
          userId: that.data.UserId,
          consultantName: that.data.form_Name,
          consultantPhone: that.data.form_Phone,
          consultantExp: that.data.form_Text,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        success: function (res) {
          console.log("return:")
          console.log(res)
        },
        fail: function (d) {
          console.log("fail")
        },

      })


    }

  }
})