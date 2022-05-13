// custom-tab-bar/index.js
import {createStoreBindings, storeBindingsBehavior} from '../miniprogram_npm/miniprogram_npm/mobx-miniprogram-bindings/index'
import {store} from '../Store/store'

Component({
    options:{
        styleIsolation:'shared'
    },
    /**
     * 组件的属性列表
     */
    behaviors:[storeBindingsBehavior],
    storeBindings:{
        store,
        fields:{
            active:'activeTabBarIndex'
        },
        actions:{
            updateActive:'updateActiveTabBarIndex'
        }
    },
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        "list": [{
            "pagePath": "/pages/index/index",
            "text": "首页",
            "iconPath": "../pages/images/tabs/icon-spot.png",
            "selectedIconPath": "../pages/images/tabs/icon-spot-active-b.png"
        },{
            "pagePath": "/pages/route/route",
            "text": "行程",
            "iconPath": "../pages/images/tabs/icon-route.png",
            "selectedIconPath": "../pages/images/tabs/icon-route-active-b.png"
        },{
            "pagePath": "/pages/tool/tool",
            "text": "工具",
            "iconPath": "../pages/images/tabs/icon-tool.png",
            "selectedIconPath": "../pages/images/tabs/icon-tool-active-b.png"
        },{
            "pagePath": "/pages/my/my",
            "text": "我的",
            "iconPath": "../pages/images/tabs/icon-my.png",
            "selectedIconPath": "../pages/images/tabs/icon-my-active-b.png"
        }]
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            // event.detail 的值为当前选中项的索引
            // this.setData({ active: event.detail });
            this.updateActive(event.detail);
            wx.switchTab({
              url: this.data.list[event.detail].pagePath,
            })
          },
    }
})
