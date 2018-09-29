import { HTTP } from '../util/http.js'
class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        cb(res)
      }
    })
  }
}

export { ClassicModel }