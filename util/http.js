import Config from '../config.js'
const tips = {
  1: '抱歉，出现错误',
  1005: '不存在'
}
class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: Config.api_base_url + params.url,
      data: params.data,
      header: {
        'content-type': 'application/json'
      },
      method: params.method,
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success(res.data)
        } else {
          // 服务器异常
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        // api调用失败
          this._show_error(1)        
      }
    })
  }

  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP }