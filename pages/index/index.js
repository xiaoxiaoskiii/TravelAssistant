// index.js
Page({
    data:{
        swiperList:[
            {
                id:1,
                image:"../images/1.png"
            },{
                id:2,
                image:"../images/2.png"
            },{
              id:3,
              image:"../images/3.png"
          }
        ],
        covidCode:'',
        riskHigh:'',
        riskMid:'',
        haveInfo:false,
    },
    onLoad:function(options){
        self = this
    },
    submit:function(){
      wx.reLaunch({
        url: '/pages/route/route',
      })
    },
    stopShow: function () {
      wx.showToast({
        title: '疫情期间出行注意安全哦',
        icon:'none',
        duration:3000
      });
      self.setData({
        haveInfo:false,
      });
      // wx.showModal({
      //   title: '高风险地区',
      //   success: function (res) {
      //     if (res.confirm) {
      //       console.log('点击确定')//点击确定事件
      //     } else {
      //       console.log('点击取消')//点击取消事件
      //     }
      //   }
      // })
    },
    getCovidInfo:function(){
      wx.request({
        url: 'https://api.tianapi.com/ncov/index', 
        method: 'GET',
        data:{
          key: 'a0077e96ef2bad098f7dad0c6c3ac906'
        },
        success: function (res) {
          if(res.data.code == 200){
            console.log(res.data)
            self.setData({
              covidCode:res.data.code,
              riskHigh:res.data.newslist[0].riskarea.high,
              riskMid:res.data.newslist[0].riskarea.mid,
              haveInfo:true,
            })
           }
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }
})
