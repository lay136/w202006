// pages/article/article.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articles:[
            {
                author:'Tom',
                avatar:'/images/avatar/u1.jpg',
                time:'10天前',
                title:'我是文章的标题111',
                mainImage:'/images/article/a1.jpg',
                desc:'我是文章描述111',
                star:20,
                view:30
            },
            {
                author:'Tom',
                avatar:'/images/avatar/u2.jpg',
                time:'3天前',
                title:'我是文章的标题222',
                mainImage:'/images/article/a2.jpg',
                desc:'我是文章描述222',
                star:20,
                view:30
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log('article onLoad ...')
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
})