// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean

  },

  /**
   * 组件的初始数据
   */
  data: {
    leftImg: 'images/arrow-l.svg',
    rightImg: 'images/arrow-r.svg',
    leftImgGray: 'images/arrow-l-gray.svg',
    rightImgGray: 'images/arrow-r-gray.svg'

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function (event) {
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {})
      }
      
    },
    onRight: function (event) {
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }

  }
})
