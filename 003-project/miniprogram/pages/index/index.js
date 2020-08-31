//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  /*
  tapView:function(){
    console.log('tapView ...');
  },
  tapText:function(){
    console.log('tapText ...');
  },
  catchView:function(){
    console.log('catchView ...');
    
  },
  catchText:function(){
    console.log('catchText ...');
    
  }
  */
 tapMotto:function(){
   //点击跳转页面
   /*
   wx.redirectTo({
    url:'/pages/article/article'
  })
  */
   wx.navigateTo({
     url:'/pages/article/article'
   })
 },
 /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // console.log('Index onLoad ...')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      // console.log('Index onReady ...')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      // console.log('Index onShow ...')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      // console.log('Index onHide ...')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
      // console.log('Index onUnload ...')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      // console.log('Index onPullDownRefresh ...')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      // console.log('Index onReachBottom ...')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      // console.log('Index onShareAppMessage ...')
  },
  onPageScroll: function() {
      // 页面滚动时执行
      // console.log('Index onPageScroll ...')
  },
  onResize: function() {
      // 页面尺寸变化时执行
      // console.log('Index onResize ...')
  },
  
})