// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

const app = getApp();
const util={};

/*
*  检测是否为iphoneX,兼容底部黑条问题
*  返回 true 或 false
* 
* */
util.isIphoneX = () => {
	let _self = this;
	let isIphoneX=false;
	wx.getSystemInfo({
		success: res => {
			console.log(res)
			let modelmes = res.model;
			if (modelmes.search('iPhone X') != -1) {
			  isIphoneX = true;
			}else{
				isIphoneX=false;
			}
		}
	})  
	
	return isIphoneX
 
	 
}

module.exports = util
