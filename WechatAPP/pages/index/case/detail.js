const app = getApp()
Page({
    data: {
      loadhidden: false,
      comments : [],  //问题内容
      winHeight: app.globalData.winHeight,
      agree_num:'',
      disagree_num:'',
      currentId:'',//点击的问题ID
      collection:'',
      COLLECTION:''
    },
    onLoad: function( option ) {
      var that=this
      // 获取接收到的id值
      var getId = option.id;
      this.setData({
        currentId: getId
      });
      //读取同意的数目
       var agree_number=wx.getStorageSync('agreement_Num', dianzan)
       var agree_Number=agree_number[getId]
      //读取不同意的数目
       var disagree_number = wx.getStorageSync('disagreement_Num', fandui)
       var disagree_Number = disagree_number[getId]
      // 读取所有的话题讨论列表点赞缓存状态
       var cache = wx.getStorageSync('agreement_State');
       var disagreement_State = wx.getStorageSync('disagreement_State');
      if (cache) {
        var currentCache = cache[getId];
        var CurrentCache = disagreement_State[getId];//新***
        this.setData({
          collection: currentCache,
          COLLECTION: CurrentCache//新***
        })
        //当前同意的数目
        if (agree_Number) {
          this.setData({
            agree_num: agree_Number,
            disagree_num: disagree_Number//新***
          })
        }
        //如果没有则创建
        else {
          var a = wx.getStorageSync('agreement_Num');
          var b = 0
          a[this.data.currentId] = b
          wx.setStorageSync('agreement_Num', a);
          this.setData({
            // collection 默认的是 false
            agree_num: b
          })
        }
        //当前不同意的数目
        if(disagree_Number)
        {
          this.setData({
            disagree_num: disagree_Number//新***
          })
        }
        else
        {
          //新***
          var z = wx.getStorageSync('disagreement_Num');
          var x = 0
          z[this.data.currentId] = x
          wx.setStorageSync('disagreement_Num', z);
          this.setData({
            disagree_num: x
          })
        }
      }
      else {
        //创建缓存
        var cache = {};
        cache[getId] = false;
        wx.setStorageSync('agreement_State', cache);
        wx.setStorageSync('onlyOneStorage', cache);
        //点赞缓存个数
        var dianzan={};
        dianzan[getId]=0
        wx.setStorageSync('agreement_Num',dianzan)
        this.setData({
          agree_num: dianzan[getId]
        })
        //反对缓存个数
        var dis = {};
        dis[getId] = false;
        wx.setStorageSync('disagreement_State',dis);
        var fandui = {};
        fandui[getId] = 0
        wx.setStorageSync('disagreement_Num', fandui)
        this.setData({
          disagree_num: fandui[getId]
        })
        
      }
        
      //发送数据
      wx.request({
        url:'http://120.78.89.170/boutique/list' ,
        data: {
          key: 'haiqian',
          questionId: getId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        method: 'POST',
        success: function (res) {
          that.setData({
            comments: res.data.data[0]
          })
        }
      })
      
    },
    onReady: function () {
      var that = this;
      // 数据加载完成后 延迟隐藏loading
      setTimeout(function () {
        that.setData({
          loadhidden: true
        })
      }, 500);
    },
    onShow: function() {
    },
    // 点赞
  agree:function(event){
    var that=this
    var onlyOneStorage = wx.getStorageSync('onlyOneStorage')//点赞之前的缓存
    var onlyOneStorage_dianji = onlyOneStorage[1]//当前序号点击的状态
    var cache = wx.getStorageSync('agreement_State');
    var currentCache = cache[this.data.currentId];
    var a = wx.getStorageSync('agreement_Num');
    var b=a[this.data.currentId]
    //反对的状态
    var disagreement_State = wx.getStorageSync('disagreement_State');
    var CurrentCache = disagreement_State[this.data.currentId];
    if (onlyOneStorage_dianji == !currentCache)
    {
      console.log("不能点赞了")
      wx.showToast({
        image: '../../../image/icon/sad.png',
        title: '不能点击了~',
      })
    }
    else 
    {
      currentCache = !currentCache;
      CurrentCache = !CurrentCache;
      cache[this.data.currentId] = currentCache;
      disagreement_State[this.data.currentId] = CurrentCache;
      // 重新设置缓存
      wx.setStorageSync('agreement_State', cache);
      wx.setStorageSync('disagreement_State', disagreement_State);
      // 更新数据绑定
      this.setData({
        collection: currentCache,
        COLLECTION: CurrentCache
      })
      //关于点赞同意的个数
      var c=this.data.agree_num+1
      a[this.data.currentId]=c
      wx.setStorageSync('agreement_Num', a);
      this.setData({
        agree_num: c
      })

    }
  },

    // 不满意案例
    disagree:function(){
      var that = this
      var onlyOneStorage = wx.getStorageSync('onlyOneStorage')//点赞之前的缓存
      var onlyOneStorage_dianji = onlyOneStorage[1]
      var disagreement_State = wx.getStorageSync('disagreement_State');//当前序号点击的状态
      var CurrentCache = disagreement_State[this.data.currentId];
      var m = wx.getStorageSync('disagreement_Num');//反对个数
      var n = m[this.data.currentId]
      var cache = wx.getStorageSync('agreement_State');
      var currentCache = cache[this.data.currentId];
      if (onlyOneStorage_dianji == !CurrentCache) {
        wx.showToast({
          image: '../../../image/icon/sad.png',
          title: '不能点击了~',
        })
      }
      else {
        currentCache = !currentCache;
        CurrentCache = !CurrentCache;
        cache[this.data.currentId] = currentCache;
        disagreement_State[this.data.currentId] = CurrentCache;
        // 重新设置缓存
        wx.setStorageSync('agreement_State', cache);
        wx.setStorageSync('disagreement_State', disagreement_State);
        this.setData({
          collection: currentCache,
          COLLECTION: CurrentCache
        })
        var f = this.data.disagree_num + 1
        m[this.data.currentId] = f
        wx.setStorageSync('disagreement_Num', m);
        this.setData({
          disagree_num: f
        })
      }
    }
})