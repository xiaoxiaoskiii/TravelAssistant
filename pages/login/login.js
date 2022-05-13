const db =wx.cloud.database()
const usf =db.collection('user_info')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        islogin:'1',
        loginbtnstate:'true',
        registeriphone:'',
        registerpassword:'',
        findpassword:'',
        strloginUser:'',
        strloginpassword:'',
        switchChecked:''
    },
    //注册手机号
    inputiphone2:function(e){
        console.log(e.detail.value)
        var that=this
        var m=e.detail.value
        if(m!=""&&(m.length==11))
        {
            that.setData({
                registeriphone:m
            })
            if(that.data.registerpassword!='')
            {
                that.setData({
                    loginbnstate:false
                })
            }
            else
            {
                that.setData({
                    loginbtnstate:true
                })
            }
        }
        else{
            that.setData({
                loginbtnstate:true
            })
        }
    },
    //注册密码
    password2:function(e){
        console.log(e.detail.value)
        var that=this
        var m=e.detail.value
        if(m!='')
        {
            that.setData({
                registerpassword:m
            })
            if(that.data.registeriphone!=''&&(that.data.registeriphone.length==11))
            {
                that.setData({
                    loginbtnstate:false
                })
            }
            else{
                that.setData({
                    loginbtnstate:true
                })
            }
        }
        else
        {
            that.setData({
                loginbtnstate:true
            })
        }
    },
    //注册
    formsubmit:function(e){
        console.log(e)
        var obj={}
        obj.iphone=e.detail.value.registerinputiphone
        obj.password=e.detail.value.registerinputpassword
        wx.setStorageSync('userjob2', obj)
        usf.add({
          data:{
            "user":obj.iphone,
            "password":obj.password
          }
        })
        wx.showToast({
          title: '恭喜！注册成功！',
        })
        this.setData({
            islogin:1
        })
    },
    //找回密码 判断注册手机号
    compass:function(e){
        console.log(e.detail.value)
        var that=this
        var m=e.detail.value
        if (m!=''&&(m.length==11))
        {
            that.setData({
                findpassword:m,
                loginbtnstate:false
            })
        }
        else
        {
            that.setData({
                loginbtnstate:true
            })
        }
    },
    //找回密码
    comebackpassword:function(e){
        var that=this
        var value = wx.getStorageSync('userjob2')
        if(that.data.findpassword==value.iphone)
        {
            wx.setClipboardData({
                data:value.password,
                success(res){
                    wx.getClipboardData({
                        success(res){
                            console.log(res.data+"密码")
                            that.setData({
                                islogin:1
                            })
                            wx.showToast({
                              title: '密码已复制',
                              duration:2000
                            })
                        }
                    })
                }
            })
        }
        else
        {
            wx.showToast({
              title: '该手机号尚未被注册',
              icon:'error'
            })
        }
    },
    //记住密码
    bindswitchchange:function(e){
        console.log(e)
        var that=this
        var m=e.detail.value
        if(m==true)
        {
            that.setData({
                switchChecked:m
            })
        }
        else if(m==false)
        {
            that.setData({
                switchChecked:m
            })
        }
        console.log(that.data.switchChecked+'状态')
    },
    //登录手机号
    inputiphone1:function(e){
        console.log(e.detail.value)
        var that=this
        var m=e.detail.value
        if(m!=""&&(m.length==11))
        {
            that.setData({
                strloginUser:m
            })
            if(that.data.strloginpassword!='')
            {
                that.setData({
                    loginbnstate:false
                })
            }
            else
            {
                that.setData({
                    loginbtnstate:true
                })
            }
        }
        else{
            that.setData({
                loginbtnstate:true
            })
        }
    },
    //登录密码
    password1:function(e){
        console.log(e.detail.value)
        var that=this
        var m=e.detail.value
        if(m!='')
        {
            that.setData({
                strloginpassword:m
            })
            if(that.data.strloginUser!=''&&(that.data.strloginUser.length==11))
            {
                that.setData({
                    loginbtnstate:false
                })
            }
            else{
                that.setData({
                    loginbtnstate:true
                })
            }
        }
        else
        {
            that.setData({
                loginbtnstate:true
            })
        }
    },
    //登录
    onlogin:function(e){
        var that=this
        if(that.data.switchChecked==true)
        {
            wx.setStorageSync("iphone1", that.data.strloginUser);
            wx.setStorageSync("password1", that.data.strloginpassword);
            wx.setStorageSync("checkedvalue", that.data.switchChecked);
            wx.setStorageSync("wxlogin1", false);
        }
        else if(that.data.switchChecked==false)
        {
            wx.setStorageSync("iphone1", "");
            wx.setStorageSync("password1", "");
            wx.setStorageSync("checkedvalue", false);
            wx.setStorageSync("wxlogin1", true);
        }
        var m=wx.getStorageSync('userjob2')
        that.setData({
            loginbtnstate:false
        })
        if(that.data.strloginUser==m.iphone)
        {

            if(that.data.strloginpassword==m.password)
            {
                wx.showToast({
                title: '登录成功！',
                }),

                wx.reLaunch({
                  url: '/pages/index/index',
                })
            }
            else
            {
                wx.showToast({
                title: '密码错误！',
                })
            }
        }
        else if(that.data.strloginUser!="")
        {
            wx.showToast({
            title: '该手机号未注册',
            icon:'error',
            })
        }
        
    },
    //页面跳转
    register:function(e){
        this.setData({
            islogin:3
        })
    },
    forget:function(e){
        this.setData({
            islogin:2
        })
    },
    denglu:function(e){
        this.setData({
            islogin:1
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /*var that=this
        that.setData({
            strloginUser:wx.getStorageSync("iphone1"),
            strloginpassword:wx.getStorageSync('password'),
            switchChecked:wx.getStorageSync('checkedValue1'),
            loginbtnstate:wx.getStorageSync('wxlogin1')
        })*/
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