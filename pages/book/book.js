// pages/book/book.js
const app = getApp();
const common = require('../../utils/common.js');
const chooseLocation = requirePlugin('chooseLocation');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    // 地图经纬度需要用
    address: "",
    locationName: "",
    latitude: "",
    longitude: "",
    //调用插件的key
    mapKey : "5CXBZ-OBH3V-MV5PE-USDAR-M3YW3-A4F6E",
    //调用插件的app的名称（必填）
    mapReferer : "叮咚目录-小程序端",
    // tab切换
    currentTab: 1,
    text:"你好吗",
    canAdd:true,
    canRemove:false,
    // 下面2个参数为高和宽的定义
    windowHeight: 0,
    screenHeight: 0,
    postsList: [{
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }, {
        'id': 1,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      },
      {
        'id': 2,
        'title': '论据的重要性',
        'date': '2019-07-28',
        'total_comments': 7,
        'pageviews': 491,
        'like_count': 6,
      }
    ],
    gridviewList: [{
      id: 1,
      name: "大力1"
    }, {
      id: 2,
      name: ' 大力2'

    }, {
      id: 3,
      name: ' 大力3'
    }, {
      id: 4,
      name: '大力4'
    }, {
      id: 5,
      name: '大力5'
    }, {
      id: 6,
      name: '大力6'
    }, {
      id: 7,
      name: ' 大力7'
    }, {
      id: 3,
      name: ' 大力3'
    }, {
      id: 4,
      name: '大力4'
    }, {
      id: 5,
      name: '大力5'
    }, {
      id: 6,
      name: '大力6'
    }, {
      id: 1,
      name: "大力1"
    }, {
      id: 2,
      name: ' 大力2'

    }, {
      id: 3,
      name: ' 大力3'
    }, {
      id: 4,
      name: '大力4'
    }, {
      id: 5,
      name: '大力5'
    }, {
      id: 6,
      name: '大力6'
    }, {
      id: 7,
      name: ' 大力7'
    }, {
      id: 3,
      name: ' 大力3'
    }, {
      id: 4,
      name: '大力4'
    }, {
      id: 5,
      name: '大力5'
    }, {
      id: 6,
      name: '大力6'
    }]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    that.setData({
      windowHeight: app.globalData.windowHeight,
      screenHeight: app.globalData.screenHeight
    })
    // 获取系统信息

    wx.getSystemInfo({

      success: function(res) {

        that.setData({

          winWidth: res.windowWidth,

          winHeight: res.windowHeight

        });

      }

    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(e) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {
    // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
        // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
      const location = chooseLocation.getLocation();
      console.log(location)
      if(location){
        this.setData({
            address: location.address?location.address : "",
            locationName: location.name?location.name : "",
            latitude: location.latitude?location.latitude : "",
            longitude: location.longitude?location.longitude : ""
        });
      }
    this.setData({
      currentTab: app.globalData.bookscurrentTab
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('页面上拉触底事件的处理函数onReachBottom')
  },
  /**
   * scroll-view滚动到顶部/左边时触发
   */
  scrollTop: function() {
    console.log('scroll-view滚动到顶部/左边时触发scrollTop')
  },
  /**
   * scroll-view滚动到底部/右边时触发
   */
  scrollBottom: function() {
    console.log('scroll-view滚动到底部/右边时触发scrollBottom')
  },
  // 滑动swiper切换tab下面的item
  bindChange: function(e) {
    console.log('bindChange 当前选中的' + e.detail.current)
    var that = this;
    app.globalData.bookscurrentTab = e.detail.current
    that.setData({
      currentTab: app.globalData.bookscurrentTab
    });
  },

  // 点击tab切换swiper
  swichNav: function(e) {
    console.log('swichNav 当前选中的' + e.target.dataset.current)
    var that = this;
    
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      app.globalData.bookscurrentTab = e.target.dataset.current
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // 点击书籍listview下的list
  redictDetail: function(e) {
    common.showToast('listview下' + e.currentTarget.id , 1000, 'none')
  },
  //显示地图的点击事件
  showMap() {
    wx.navigateTo({
        url: 'plugin://chooseLocation/index?key=' + this.data.mapKey + '&referer=' + this.data.mapReferer
    });
},
    //显示地图的点击事件
    showMapSubway() {
      const plugin = requirePlugin('subway');
      wx.navigateTo({
          url: 'plugin://subway/index?key=' + this.data.mapKey + '&referer=' + this.data.mapReferer
      });
},
  //显示地图的点击事件
  showMapRoutePlan() {
    let plugin = requirePlugin('routePlan');
    let endPoint = JSON.stringify({  //终点
        'name': this.data.locationName ? this.data.locationName : '广西大学-东门',
        'latitude': this.data.latitude ? this.data.latitude : 22.844453,
        'longitude': this.data.longitude ? this.data.longitude : 108.299908
    });
    wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + this.data.mapKey + '&referer=' + this.data.mapReferer + '&endPoint=' + endPoint
    });
    }
})