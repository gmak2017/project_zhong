// pages/index/index.js

const app = getApp();
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
	isIphoneX:false,   // 判断是否iphonex
	banner:{	
		current:0,
		data:[  // 轮播图数据
			{
				img:'../../static/upload/s1_02.jpg',
				url:'/'
			},
			{
				img:'../../static/upload/s1_02.jpg',
				url:'/'
			},
			{
				img:'../../static/upload/s1_02.jpg',
				url:'/'
			}
		],
		swiper:{     // swiper 配置
			indicatorDots: false,
			vertical: false, 
			autoplay: true,
			circular:true,
			interval: 3000,
			duration: 500
		}
	},
	hotGoodsSwiper:{
		indicatorDots: false,
		previousMargin:'180rpx',
		vertical: false, 
		autoplay: true,
		circular:false,
		interval: 3000,
		duration: 500
	}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
 
	/*
	 *兼容处理iphonex底部黑条
	 * 
	 * **/ 
	this.setData({
		isIphoneX:utils.isIphoneX()  
	})
	console.log('isIphoneX',this.isIphoneX,utils.isIphoneX()) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
	
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  /**
   * 自定义事件
   */
  
  /*轮播组件 自定义指示点样式*/
  swiperChange: function (e) {  
      this.setData({  
        current: e.detail.current  
      })
  
  }
})