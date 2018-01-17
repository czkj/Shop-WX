// pages/about/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contact: "",
    content: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 联系方式变化
   */
  contactChanged: function (e) {
    this.setData({
      contact: e.detail.value
    });
  },

  /**
   * 反馈内容变化
   */
  contentChanged: function (e) {
    this.setData({
      content: e.detail.value
    });
  },

  /**
   * 提交反馈
   */
  postFeedback: function (e) {
    // 清空页面
    this.setData({
      contact: '',
      content: '',
    });
    // 提交反馈请求
  }
})