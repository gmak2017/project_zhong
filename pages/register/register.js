// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	isShowPassword: true, // 是否显示密码
	isShowPasswordConfirm: true, // 是否显示确认密码
	test:1
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
  
  /*同意协议开关*/
  agreeEvent: function() {
    if (!this.isAgreement) {
      this.setData({
        isAgreement: true,
      });
    } else {
      this.setData({
        isAgreement: false,
      });
    }
    this.isAgreement = !this.isAgreement;
  },
  
  /*显示密码*/
  showPasswordConfirm:function(){
	 console.log(this.isShowPassword,this.isShowPasswordConfirm) 
  },
  showPassword: function(e) {
	  // type=1 密码   type=2  确认密码
	let type=e.currentTarget.dataset.type
	if(type==1){ 
		if (this.isShowPassword) {
		  this.setData({
		    isShowPassword: true,
		  });
		} else {
		  this.setData({
		    isShowPassword: false,
		  });
		}
		this.isShowPassword = !this.isShowPassword;
	}else if(type==2){
		if (this.isShowPasswordConfirm) {
		  this.setData({
		    isShowPasswordConfirm: true,
		  });
		} else {
		  this.setData({
		    isShowPasswordConfirm: false,
		  });
		}
		this.isShowPasswordConfirm = !this.isShowPasswordConfirm;
	}
		
    
  }
  
})