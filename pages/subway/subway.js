// pages/subway/subway.js
let plugin = requirePlugin('subway');
let key = 'CVFBZ-HQPEU-3V2VL-BVTBI-IWN6S-EFFQP';  //使用在腾讯位置服务申请的key
let referer = '想吃火锅队旅行助手';   //调用插件的app的名称

Page({
  onLoad:function(e) {
    wx.switchTab({
      url: '/pages/tool/tool',
    })
  },

  onShow:function(e) {
    wx.navigateTo({
      url: 'plugin://subway/index?key=' + key + '&referer=' + referer
    });
  }

})