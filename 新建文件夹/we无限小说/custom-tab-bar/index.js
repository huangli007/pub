Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{

      "text": "首页",
      "iconPath": "/img/add_black.png",
      "selectedIconPath": "/img/add_blue.png"
    },
    {

      "text": "购物车",
      "iconPath": "/img/cart_black.png",
      "selectedIconPath": "/img/cart_blue.png"
    },]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})