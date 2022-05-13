// pages/team/team.js
const db =wx.cloud.database();
const DB = wx.cloud.database().collection('myteaminfo');
const usf =db.collection('teaminfo');
let numm = "";
let numf = "";
let date = "";
let school = "";
let dest = "";
let days = "";
let desc = "";


Page({
    //页面跳转
    findteam:function(e){
      this.setData({
        islogin:1
    })
    },
    crtteam:function(e){
      this.setData({
        islogin:2
    })
    },


    //添加男生人数
    inputmale(event){
      numm = event.detail.value;
    },
    //添加女生人数
    inputfemale(event){
      numf = event.detail.value;
    },
     //添加学校信息
     inputschool(event){
      school = event.detail.value;school
    },
     //添加目的地信息
     inputdest(event){
      dest = event.detail.value;
    },
     //添加出发日期信息
     inputdate(event){
      date = event.detail.value;
    },
     //添加游玩天数日期
     inputdays(event){
      days = event.detail.value;
    },
     //添加描述信息
     inputdesc(event){
      desc = event.detail.value;
    },
    //添加数据
    addteam(){
      DB.add({
        data:{
          numm:numm,
          numf:numf,
          date:date,
          school:school,
          dest:dest,
          days:days,
          desc:desc,

        },
        success(res){
         console.log("成功",res);
        },
      })
    },
    //查询数据
    getData(){
      DB.get({
      success(res){
        console.log("查询成功",res)
      }
      })
    },
    //从云数据库获取数据 查看队伍信息
    docget1:function(e){
      console.log('执行docget')
      var that=this
      const db = wx.cloud.database()
      db.collection('teaminfo').doc('team1').get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            docget1: res.data
          })
        }
      })
    },
    docget2:function(e){
      console.log('执行docget')
      var that=this
      const db = wx.cloud.database()
      db.collection('teaminfo').doc('team2').get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            docget2: res.data
          })
        }
      })
    },
    docget3:function(e){
      console.log('执行docget')
      var that=this
      const db = wx.cloud.database()
      db.collection('teaminfo').doc('team3').get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            docget3: res.data
          })
        }
      })
    },



    

 

    /**
     * 页面的初始数据
     */
    data: {
        islogin:'1',
        text1:'x: ' + 'a',
        text2:'y',
        region:[],
        docget:{},

        
          
        
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

    }
})