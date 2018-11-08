import { HTTP } from '../util/http.js'
class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        cb(res)
        this._setLatestIndex(res.index)
      }
    })
  }
  getClassic(index, nextOrPrevious, cb) {
    // 缓存中寻找 or 写入缓存
    // key 确定 key

    let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if(!classic) {
      this.request({
        url: '/classic/' + index + '/' + nextOrPrevious,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          cb(res)
        }
      })
    } else {
      cb(classic)

    }
    
  }
  
  isFirst(index) {
    return index == 1

  }
  isLatest(index) {
    let latestIndex = this._setLatestIndex()
    return latestIndex == index
  }
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index) 
  }
  _getLatestIndex() {
    let index = wx.getStorageSync('latest')
    return index
  }
  _getKey(index) {
    let key = 'classic-' + index
    return key
  }
}

export { ClassicModel }