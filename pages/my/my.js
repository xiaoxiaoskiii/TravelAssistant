// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false,
      },
      onLoad() {
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          })
        }
      },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      },
    toLogin:function(){
        wx.reLaunch({
          url: '/pages/login/login'
        })
      },
    logout(){
          // 询问用户是否退出登录
            wx.showModal({
              title: '提示',
              content: '您确定要退出登录吗',
              success: function (res) {
                if (res.confirm) {//这里是点击了确定以后
                  console.log('用户点击确定');
                  this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: false
                  });
                  wx.setStorageSync('token', '');//将token置空
                  wx.redirectTo({
                    url: '/pages/login/login',//跳去登录页
                  })
                } else {//这里是点击了取消以后
                  console.log('用户点击取消')
                }
              }
            })
    }
})