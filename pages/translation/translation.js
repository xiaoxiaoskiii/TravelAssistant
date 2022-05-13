var plugin = requirePlugin("WechatSI")
let manager = plugin.getRecordRecognitionManager()
const app = getApp()
Page({
  data: {
    content: '',
    text: '这里显示您的语音录入内容',
    auidoSrc: ''
  },
  onReady: function () {
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.onError(function (res) {
      wx.showToast({
        title: '语音播放初始化失败',
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //识别内容返回时间
    var that = this;
    manager.onRecognize = function (res) {
      console.log("current result", res.result)
    };
    // 识别结束事件
    manager.onStop = (res) => {
      let text = res.result;
      if (text == "") {
        wx.showToast({
          title: '请再说一次',
          icon:'error',
        })
        this.setData({
          text: '这里显示您的语音录入内容',
        })
      } else {
        if (text.indexOf('小助手') != -1) {
          text = '小助手在呢，主人有什么吩咐';
        }
        this.setData({
          text: text,
        });
      }
    };
    //识别错误时间
    manager.onError = function (res) {
      var text = '其他错误';
      if (res.retcode == -30001 || res.retcode == -30012) {
        text = '右上角进行设置';
        that.setData({
          text: '这里显示您的语音录入内容',
        })
      }
      wx.showToast({
        title: text,
        icon: 'none',
        duration: 3000,
      })

    }
  },
  //开始录音
  postData: function () {
    manager.start({ duration: 30000, lang: "zh_CN" })
    this.setData({
      text: '正在聆听...',
    });
    manager.onStart = function (res) {
      //console.log("成功开始录音识别", res)
    }
  },
  stopData: function () {
    manager.stop();
  }
})