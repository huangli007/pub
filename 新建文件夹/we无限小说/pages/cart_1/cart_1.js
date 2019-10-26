// pages/customers/customers.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

    src: '',
    latitude: 22.378,
    longitude: 113.45,
    scale: 5,
    show_location: "true",
    markers: [{
      iconpath: "../../img/1.jpg",
      id: 0,
      latitude: 22.378,
      longitude: 113.45,
      width: 30,
      height: 30
    }, {
      iconpath: "../../img/1.jpg",
      id: 0,
      latitude: 22.378345,
      longitude: 113.45,
      width: 30,
      height: 30
    }],
    controls: [{
      id: 1,
      iconpath: '../../img/1.jpg',
      position: {
        left: 0,
        top: 250,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onReady: function () {
      wx.getLocation({
        success: function (res) {

          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
        },
      })

    },



    distinct1: function () {
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {

          this.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            markers: [{
              id: "1",
              latitude: res.latitude,
              longitude: res.longitude,
              width: 50,
              height: 50,
              iconPath: "../../img/search_red.png",
              title: "哪里"

            }],
            circles: [{
              latitude: res.latitude,
              longitude: res.longitude,
              color: '#FF0000DD',
              fillColor: '#7cb5ec88',
              radius: 3000,
              strokeWidth: 1
            }]

          })
        }

      })
    },

    chooseImg: function () {
      var self = this;
      wx.chooseImage({
        success: function (res) {
          console.log(res.tempFilePaths)
          wx.previewImage({
            urls: [res.tempFilePaths[0]],
          })
        },
      })
    },

    record: function () {
      wx.startRecord({
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          console.log(filePath),
            wx.playVoice({
              filePath: tempFilePath,

            });


        },
      })
      setTimeout(function () {
        wx.stopRecord();
      }, 2000)

    },

    toast: function () {
      wx.showToast({
        title: '加载中',
        icon: "loading"
      })
    },

    success: function () {
      wx.showToast({
        title: '支付成功',
        icon: 'success'
      })
    },

    confirm: function () {
      wx.showModal({
        title: '支付提示',
        content: '确定支付？',
        success: function (res) {
          console.log('确定支付')

        }

      })


    }



  }
})