
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
       var agree_number=wx.getStorageSync('yes', dianzan)
       var agree_Number=agree_number[getId]
      //读取不同意的数目
       var disagree_number = wx.getStorageSync('no', fandui)
       var disagree_Number = disagree_number[getId]
      // 读取所有的话题讨论列表点赞缓存状态
       var cache = wx.getStorageSync('cache_key');
       var noway = wx.getStorageSync('Noway');//新***
      if (cache) {
        var currentCache = cache[getId];
        var CurrentCache = noway[getId];//新***
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
          var a = wx.getStorageSync('yes');
          var b = 0
          a[this.data.currentId] = b
          wx.setStorageSync('yes', a);
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
          var z = wx.getStorageSync('no');
          var x = 0
          z[this.data.currentId] = x
          wx.setStorageSync('no', z);
          this.setData({
            disagree_num: x
          })
        }
      }
      else {
        //创建缓存
        var cache = {};
        cache[getId] = false;
        wx.setStorageSync('cache_key', cache);
        wx.setStorageSync('before', cache);
        //点赞缓存个数
        var dianzan={};
        dianzan[getId]=0
        wx.setStorageSync('yes',dianzan)
        this.setData({
          agree_num: dianzan[getId]
        })
        //反对缓存个数
        var dis = {};
        dis[getId] = false;
        wx.setStorageSync('Noway',dis);
        var fandui = {};
        fandui[getId] = 0
        wx.setStorageSync('no', fandui)
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
    var before = wx.getStorageSync('before')//点赞之前的缓存
    var before_dianji = before[1]//当前序号点击的状态
    var cache = wx.getStorageSync('cache_key');
    var currentCache = cache[this.data.currentId];
    var a = wx.getStorageSync('yes');
    var b=a[this.data.currentId]
    //反对的状态
    var noway = wx.getStorageSync('Noway');
    var CurrentCache = noway[this.data.currentId];
    if (before_dianji == !currentCache)
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
      noway[this.data.currentId] = CurrentCache;
      // 重新设置缓存
      wx.setStorageSync('cache_key', cache);
      wx.setStorageSync('Noway', noway);
      // 更新数据绑定
      this.setData({
        collection: currentCache,
        COLLECTION: CurrentCache
      })
      //关于点赞同意的个数
      var c=this.data.agree_num+1
      a[this.data.currentId]=c
      wx.setStorageSync('yes', a);
      this.setData({
        agree_num: c
      })

    }
  },

    // 不满意案例
    disagree:function(){
      var that = this
      var before = wx.getStorageSync('before')//点赞之前的缓存
      var before_dianji = before[1]
      var noway = wx.getStorageSync('Noway');//当前序号点击的状态
      var CurrentCache = noway[this.data.currentId];
      var m = wx.getStorageSync('no');//反对个数
      var n = m[this.data.currentId]
      var cache = wx.getStorageSync('cache_key');
      var currentCache = cache[this.data.currentId];
      if (before_dianji == !CurrentCache) {
        wx.showToast({
          image: '../../../image/icon/sad.png',
          title: '不能点击了~',
        })
      }
      else {
        currentCache = !currentCache;
        CurrentCache = !CurrentCache;
        cache[this.data.currentId] = currentCache;
        noway[this.data.currentId] = CurrentCache;
        // 重新设置缓存
        wx.setStorageSync('cache_key', cache);
        wx.setStorageSync('Noway', noway);
        this.setData({
          collection: currentCache,
          COLLECTION: CurrentCache
        })
        var f = this.data.disagree_num + 1
        m[this.data.currentId] = f
        wx.setStorageSync('no', m);
        this.setData({
          disagree_num: f
        })
      }
    }
})