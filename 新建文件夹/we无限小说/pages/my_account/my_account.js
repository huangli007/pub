// pages/my_account/my_account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      succes(res) {
        console.log(res)
      }
    }),

      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      })

    
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'https://www.douyu.com/1126960',

      success(res) {
        console.log("douyu-success")
      },
      fail() {
        console.log('douyu-fail')
      },
      complete() {
        console.log('douyu-end')
      },
      
    })
    this.videoContext = wx.createVideoContext('Video')
    // wx.playBackgroundAudio({
    //  dataUrl: 'https://m801.music.126.net/20191013123706/e03f64d710791797ce44fbd2374edc14/jdyyaac/0e0e/010e/025d/9d848dda1a6dadb1fdbb573aca29a38a.m4a',
    //    title: 'music',
    //   coverImgUrl: '/img/1.jpg'
    //  })
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
    
    wx.showToast({
      title: '到底啦！！！',
      image:'',
      mask  :true,
      duration:1200,

    }),
    console.log("到底啦");
    wx.createAnimation({
      timingFuction: 'linear',
      duration:2000,
      transformOrigin: '50% 50% 0',
      
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  video: function () {
    wx.createVideoContext()
  },

  scan: function () {
    wx.scanCode()

  }

})