Page({
  data: {
      gridname:[{
          id:1,
          name:'地图选点',
          intro:'来自腾讯地图',
          path:'/pages/map/map',
          ipath:'../images/tool/icon-map.png'
      },{
        id:2,
        name:'城市地铁',
        intro:'来自腾讯地图',
        path:'/pages/subway/subway',
        ipath:'../images/tool/icon-city.png'
    },{
        id:3,
        name:'路线规划',
        intro:'来自腾讯地图',
        path:'/pages/plan/plan',
        ipath:'../images/tool/icon-route.png'
    },{
        id:4,
        name:'语音翻译',
        intro:'来自微信同声传译',
        path:'/pages/translation/translation',
        ipath:'../images/tool/icon-transition.png'
    },{
        id:5,
        name:'天气查询',
        intro:'来自和风天气',
        path:'/pages/weather/weather',
        ipath:'../images/tool/icon-weather.png'
    },{
        id:6,
        name:'简约记账',
        intro:'未来支持共同记账',
        path:'/pages/account/account',
        ipath:'../images/tool/icon-note.png'
    },{
        id:7,
        name:'汇率转换',
        intro:'来自天行数据',
        ipath:'../images/tool/icon-exchange.png'
    },{
        id:8,
        name:'多人组队',
        intro:'结伴同行',
        path:'/pages/team/team',
        ipath:'../images/tool/icon-team.png'
    }
    ]
  },
  onUnload: function (options) {
    // getApp().page.onUnload(this);
  },
  onLoad: function (options) {
    // that = this
    // getApp().page.onLoad(this, options);
  },
  nav1:function() {
    wx.redirectTo({
        url: '{{item.path}}',
      })
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
    // this.setData({
    //   show_tip_msg:false
    // })
  },
 
})
