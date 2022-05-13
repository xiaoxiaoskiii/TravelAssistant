// pages/map/map.js
const key = 'VLKBZ-Q6J6F-MWRJN-JK63V-ZEVWE-XSB2J'; //使用在腾讯位置服务申请的key
const referer = '想吃火锅队旅行助手'; //调用插件的app的名称
const location = JSON.stringify({
  latitude: 39.89631551,
  longitude: 116.323459711
});
const category = '生活服务,娱乐休闲';

Page({
  onLoad:function(e){
    wx.switchTab({
      url: '/pages/tool/tool',
    })
  },
  
  onShow:function(e) {
    wx.navigateTo({
      url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
    })
  }

})