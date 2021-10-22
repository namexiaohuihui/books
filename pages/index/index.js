//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    swiper_item: true,
    imgUrls: ['/images/image.jpg',
  'https://iconfont.alicdn.com/t/534acfb1-1331-4c83-a6c0-4186ae8ad4e5.png'
],
    classify: [{
        "icon": "iconfont icon-ziyuan",
        "text": "书籍"
      }, {
        "icon": "iconfont icon-zuozhe",
        "text": "作者"
      },
      {
        "icon": "iconfont icon-yinshua",
        "text": "出版社"
      },
      {
        "icon": "iconfont icon-guojia",
        "text": "国家"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    hellowdata: "修改轮播图",
    // 按钮是否可以点击
    buttonClicked: true,
    time: 3,
    setInter: '',
    // 下面2个参数为高和宽的定义
    windowHeight: 0,
    screenHeight: 0,
    delBtnWidth: 180//删除按钮宽度单位（rpx）
  },

  //事件处理函数
  bindViewTap: function() {},

  onLoad: function(options) {
    var that = this
    this.setData({
      windowHeight: app.globalData.windowHeight,
      screenHeight: app.globalData.screenHeight
    })
    // 页面初始化 options为页面跳转所带来的参数
    that.initEleWidth();
    that.tempData();
  },

  getUserInfo: function(e) {},

  onShareAppMessage: function(res) {
    console.log('res', '进入分享页面')
    return {
      title: '多久没有抬头看看天空?多久没有听到虫鸣鸟叫的声音?',
      path: '/pages/index/index',
      imageUrl: "/images/image.jpg",
    }
  },

  /**
   * 点击变化按钮
   */
  ongetimage: function(e) {
    var that = this
    that.setData({
      buttonClicked: false
    })
    var d = that.data.swiper_item === true ? true : false
    console.log("点击修改轮播图", that.data.time)

    var t1 = that.data.time
    that.data.setInter = setInterval(function() {
      console.log("倒计时数字", t1)
      if (t1 > 0) {
        that.setData({
          hellowdata: t1 + 's之后更新'
        })
      } else {
        that.setData({
          time: 3,
          hellowdata: '倒计时完毕',
          buttonClicked: true
        })
        clearInterval(that.data.setInter)
      }
      t1 = t1 - 1
    }, 1000)

    if (d === true)
      that.setData({
        imgUrls: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4151170903,256805738&fm=26&gp=0.jpg',
          'http://h.hiphotos.baidu.com/lvpics/w=600/sign=6570942cbf12c8fcb4f3f5cdcc0292b4/d01373f082025aafb3f498c7fdedab64024f1af3.jpg',
          'http://f.hiphotos.baidu.com/lvpics/w=600/sign=4351b6aa8694a4c20a23e42b3ef51bac/024f78f0f736afc3ece868c0b219ebc4b64512aa.jpg'
        ],
        swiper_item: false
      })
    else
      that.setData({
        imgUrls: ['/images/image.jpg',
          '/images/OIP.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561277999415&di=4bb405c84ee76df91ecc8c5066db800f&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Fsmccloud%2Frecom%2F2015%2F07%2F01%2F143573699180694823.JPEG'
        ],
        swiper_item: true
      })
  },
  // 点击书籍菜单跳转
  booksMenu: function(e) {
    console.log("哎哟喂" + e.currentTarget.dataset.id)
    app.globalData.bookscurrentTab = e.currentTarget.dataset.id
  },



  // 以下为删除
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    if (e.touches.length == 1) {
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0px";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "px";
        }
      }
      //获取手指触摸的是哪一项
      var index = e.target.dataset.index;
      var list = this.data.list;
      if (index >= 0) {
        list[index].txtStyle = txtStyle;
        //更新列表的状态
        this.setData({
          list: list
        });
      }
    }
  },

  touchE: function (e) {
    if (e.changedTouches.length == 1) {
      //手指移动结束后水平位置
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
      //获取手指触摸的是哪一项
      var index = e.target.dataset.index;
      var list = this.data.list;
      console.log(e);
      if (index >= 0) {
        list[index].txtStyle = txtStyle;
        //更新列表的状态
        this.setData({
          list: list
        });
      }
    }
  },
  //获取元素自适应后的实际宽度
  getEleWidth: function (w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应
      // console.log(scale);
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
      // Do something when catch error
    }
  },
  initEleWidth: function () {
    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth: delBtnWidth
    });
  },
  //点击删除按钮事件
  delItem: function (e) {
    //获取列表中要删除项的下标
    var index = e.target.dataset.index;
    var list = this.data.list;
    //移除列表中下标为index的项
    list.splice(index, 1);
    //更新列表的状态
    this.setData({
      list: list
    });
  },
  //测试临时数据
  tempData: function () {
    var list = [
      {
        txtStyle: "",
        icon: "/images/home-like.png",
        txt: "向左滑动可以删除"
      },
      {
        txtStyle: "",
        icon: "/images/home-like.png",
        txt: "微信小程序|联盟（wxapp-union.com）"
      },
      {
        txtStyle: "",
        icon: "/images/home-like.png",
        txt: "圣诞老人是爸爸，顺着烟囱往下爬，礼物塞满圣诞袜，平安糖果一大把"
      },
      {
        txtStyle: "",
        icon: "/images/home-like.png",
        txt: "圣诞到来，元旦还会远吗？在圣诞这个日子里"
      },

      {
        txtStyle: "",
        icon: "/images/home-like.png",
        txt: "你的圣诞节礼物准备好了吗?"
      },
      {
        txtStyle: "",
        icon: "/images/home-like.png",
        txt: "记下这一刻的心情"
      },

    ];

    this.setData({
      list: list
    });
  }
})