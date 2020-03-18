// pages/confirm/confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	isCoupon:false,   // 打开优惠券
	isAgreement:false  // 同意协议
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  /*显示优惠券输入框*/
  showCoupon:function(){
	if(!this.isCoupon){
		this.setData({
			isCoupon:true
		})
	}else{
		this.setData({
			isCoupon:false
		})
	}
	this.isCoupon=!this.isCoupon;
  },
  
  /*同意协议*/
  agreeEvent:function(){
	  if(!this.isAgreement){
	  	this.setData({
	  		isAgreement:true
	  	})
	  }else{
	  	this.setData({
	  		isAgreement:false
	  	})
	  }
	  this.isAgreement=!this.isAgreement;
  }
  
  
  
  
})