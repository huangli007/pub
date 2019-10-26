//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    icon: {
      size: 50,
      opacity: 2
    },
    list:['1n123123','2n','3n','4n',5],
    selectedIndex:1,
    selectedTime:"00:00",
    inputtype:["text","number","idcard","digit","time","date"]
  },
  call:function(){ 
    wx.makePhoneCall({
      phoneNumber: '18902477517',
    })
  },
  change:function(e){
    this.setData({
       
      selectedIndex:e.detail.value
    });
  },
  audio: function(){ 
    wx.playBackgroundAudio({
      dataUrl: './1.mp3',
    })
  },
  request:function(){
    wx.request({
      url: 'https://www.douyu.com/g_LOL',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {console.log(res)},
      fail: function (res) { console.log("请求失败")},
      complete: function (res) { console.log("请求完成")},
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady:function(){ 
    wx.playBackgroundAudio({
      dataUrl: './1.mp3',
    }),
    wx.getUserInfo({
      success:function(res){
        console.log(res);
      }
    }),
    wx.createInnerAudioContext({
        dataUrl: './1.mp3',
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changesize: function (e) {
    this.data.icon.size = e.detail.value;
    this.setData(this.data);
    
  },
  changeoparity: function (e) {
    this.data.icon.opacity = e.detail.value;
    this.setData(this.data);
    
  },
})