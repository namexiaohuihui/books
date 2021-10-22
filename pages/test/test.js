const app = getApp()
Page({
  data: {
    // 弹窗参数判断
    modalHidden: true
  },
  /**
   * 显示弹窗
   */
  buttonTap: function() {
    console.log('手动点击弹窗')
    this.setData({
      modalHidden: false
    })
  },

  /**
   * 点击取消
   */
  modalCandel: function() {
    // do something
    console.log('点击了取消按钮')
    this.setData({
      modalHidden: true
    })
  },

  /**
   *  点击确认
   */
  modalConfirm: function(e) {
    // do something
    console.log('点击了确定按钮'),
      console.log(app.globalData.userInfo)
    var that = this
    this.setData({
      modalHidden: true,
      userInfo: app.globalData.userInfo
    })
  },
})