// pages/plan/plan.js
let plugin = requirePlugin('routePlan');
let key = 'VXCBZ-JOOC3-ZSQ3P-YLKL5-RBUQF-B6F35';  //使用在腾讯位置服务申请的key
let referer = '想吃火锅队旅行助手';   //调用插件的app的名称
let endPoint = JSON.stringify({  //终点
  'name': '北京西站',
  'latitude': 39.894806,
  'longitude': 116.321592
});
Page({

  onLoad:function(e) {
    wx.switchTab({
      url: '/pages/tool/tool',
    })
  },

  onShow:function(e) {
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  }

})