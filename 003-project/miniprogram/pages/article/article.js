var { articles } = require('../../db/index.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        articles:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 页面加载完毕发送请求获取数据
        this.setData({articles:articles})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log('article onReady ...')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log('article onShow ...')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // console.log('article onHide ...')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        // console.log('article onUnload ...')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        // console.log('article onPullDownRefresh ...')
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        // console.log('article onReachBottom ...')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        // console.log('article onShareAppMessage ...')
    },
    onPageScroll: function() {
        // 页面滚动时执行
        // console.log('article onPageScroll ...')
    },
    onResize: function() {
        // 页面尺寸变化时执行
        // console.log('article onResize ...')
    },
    /**
     * 点击跳转文章详情
     */
    tapArticleDetail:function(ev){
        // console.log(ev.currentTarget.dataset);
        var articleId = ev.currentTarget.dataset.articleId
        wx.navigateTo({
          url: '/pages/article/article-detail/article-detail?articleId='+articleId,
        })
    }
})