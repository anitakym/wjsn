// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike: {
      type: Boolean
    },
    count: {
      type: Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: 'images/icon-bamboo-active.svg',
    noSrc: 'images/icon-bamboo.svg'

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      let isLike = this.properties.isLike
      let count = this.properties.count

      count = isLike ? count - 1 : count + 1
      this.setData({
        count: count,
        isLike: !isLike
      })

    }

  }
})
