//显示Toast
function showToast(showTitle, showTime, icon) {
  wx.showToast({
    title: showTitle,
    icon: icon,
    duration: showTime,
  })
}

//隐藏Toast
function hideToast(e) {
  wx.hideToast()
}
//显示Loading
function showLoading(showTitle, showTime) {
  wx.showLoading({
    title: showTitle,
  }, showTime)
}

//隐藏Loading
function hideLoading(e) {
  wx.hideLoading()
}

//显示提示框
function showModal(showTitle, showContent) {
  wx.showModal({
    title: showTitle,
    content: showContent,
    success(res) {
      console.log(res)
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}

module.exports={
  showToast : showToast,
  hideToast : hideToast,
  showLoading: showLoading,
  hideLoading: hideLoading,
  showModal: showModal
}