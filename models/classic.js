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
    this.request({
      url: '/classic/' + index + '/' + nextOrPrevious,
      success: (res) => {
        cb(res)
      }
    })
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
}

export { ClassicModel }