//app.js
App({
  onLaunch: function () { 
    let _self = this;
	wx.getSystemInfo({
		success: res => {
			console.log(res)
			let modelmes = res.model;
			if (modelmes.search('iPhone X') != -1) {
			  _self.globalData.isIphoneX = true
			}
			wx.setStorageSync('modelmes', modelmes)
		}
	}) 
  },
  globalData: {
    isIphoneX:false 
  }
})