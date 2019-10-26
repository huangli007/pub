// pages/main/main.js
Page({
  baidu: function () {

  },
  /**
   * 页面的初始数据
   */
  data: {
    url: ['http://www.8kqw.com/uploads/thumb/250x149/2017-05-19/43cb6d5d9cc88c4e68c454f348b7a734.jpg',
      'http://www.8kqw.com/uploads/thumb/250x149/2016-07-19/79db1b7e8f34cd736e096eb832041e06.jpg', 'http://www.8kqw.com/uploads/thumb/250x149/2016-07-21/cc406a1e777580f555ca42059a63155f.jpg', 'http://www.8kqw.com/uploads/thumb/250x149/2017-04-13/a221670a576ae361962ce0a671785276.png', 'http://www.8kqw.com/uploads/thumb/250x149/2017-08-10/7ef159f252e743bd5fa30eadda6a39b9.jpg', 'http://www.8kqw.com/uploads/thumb/250x149/2017-06-06/db66aa3f979e33e733ab926b0983ec8a.jpg', 'http://www.8kqw.com/uploads/thumb/250x149/2016-11-02/77a4c18e212d84fa306f69f90ef49841.png', 'http://www.8kqw.com/uploads/thumb/250x149/2017-09-20/13875200bf3c48e693fc52d74b63fd67.jpg', 'http://www.8kqw.com/uploads/thumb/250x149/2016-11-02/36a150003b43c5f2941678dcc08b7e0b.jpg',],

    url_name:[{ name: '成交' }, { name: "门店" }, { name: "优惠" }, { name: "礼品" }, { name: "积分" }, { name: "会员" }, { name: "我的" }, { name: "商城" }],

    local_img: [{ name: '门店', src:'../../img/dianshang.png' }, { name: '购买', src: '../../img/goumai.png' }, { name: '礼物', src: '../../img/liwu.png' }, { name: '搜索', src: '../../img/search_black.png' }, { name: '商店', src: '../../img/shangdian.png' }, { name: '送货车', src: '../../img/songhuoche.png' }, { name: '信用卡', src: '../../img/xinyongka.png' }, { name: '优惠券', src: '../../img/youhuiquan.png' },],

    url2: [{ name: '装修设计', src: 'http://www.8kqw.com/uploads/2016-11-19/08dcca353caf32a6c68dcea21d1e895f.png' }, { name: '电器系列', src: 'http://www.8kqw.com/uploads/2017-05-23/3e40dd3c0782441978b3df425b0970c8.png' }, { name: '瓷砖系列', src: 'http://www.8kqw.com/uploads/2016-11-24/cd1408d2f038a015b5607148aff73aff.png' }, { name: '橱柜系列', src: 'http://www.8kqw.com/uploads/2016-11-19/265a7a5d20ca495d5ef3b58230767fca.png' }, { name: '地板系列', src: 'http://www.8kqw.com/uploads/2016-11-19/6a35cb2e7b31df9e82ba7be912022670.png' }, { name: '卫浴系列', src: 'http://www.8kqw.com/uploads/2016-11-19/48093e3640089811f72ebc4d6ef0549f.png' }, { name: '涂料门窗', src: 'http://www.8kqw.com/uploads/2015-10-28/3bb12753107a48ac63d753467d213333.png' }, { name: '灯饰窗帘', src: 'http://www.8kqw.com/uploads/2016-11-19/859fac24f9aa7005f45598daf98cbf37.png' },],
    url3: [{ title: '垃圾分类，轮到北京了！', src: 'http://www.8kqw.com/uploads/2016-11-19/08dcca353caf32a6c68dcea21d1e895f.png', time: "2019-12-12 12:12:12" }, { title: '打造一个好看的厨房到底有多重要？', src: 'http://www.8kqw.com/uploads/2017-05-23/3e40dd3c0782441978b3df425b0970c8.png', time: "2019-12-12 12:12:12" }, { title: '木柜门上有些莲藕色，给厨房带来优雅大方的感觉。灯光明亮的厨房配上浅色的设计，看起来真的很舒服。', src: 'http://www.8kqw.com/uploads/2016-11-24/cd1408d2f038a015b5607148aff73aff.png', time: "2019-12-12 12:12:12" }, { title: '厨房的墙砖和地砖是一个关键点。上图中的瓷砖颜色不同，但同一颜色体系的瓷砖在厨房使用时非常好看。它们有清晰的层次，可以扩大空间的视觉感。', src: 'http://www.8kqw.com/uploads/2016-11-19/265a7a5d20ca495d5ef3b58230767fca.png', time: "2019-12-12 12:12:12" }, { title: '地板系列', src: 'http://www.8kqw.com/uploads/2016-11-19/6a35cb2e7b31df9e82ba7be912022670.png', time: "2019-12-12 12:12:12" }, { title: '对于喜欢复古感觉的人，可以参考上图中的这种地砖，将木纹砖做旧，营造出独特的复古感觉，再加上木柜门，真的很酷。', src: 'http://www.8kqw.com/uploads/2016-11-19/48093e3640089811f72ebc4d6ef0549f.png', time: "2019-12-12 12:12:12" }, { title: '涂料门窗', src: 'http://www.8kqw.com/uploads/2015-10-28/3bb12753107a48ac63d753467d213333.png', time: "2019-12-12 12:12:12" }, { title: '仿古砖有多种颜色，如上图所示，是一种具有乡村感和现代美式风格的橱柜，营造出实用而优雅的厨房空间。', src: 'http://www.8kqw.com/uploads/2016-11-19/859fac24f9aa7005f45598daf98cbf37.png', time: "2019-12-12 12:12:12" },]

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

  }
})