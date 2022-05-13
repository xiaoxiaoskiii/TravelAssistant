// 在这个JS文件中，专门来创建Store的实例对象
import {observable, action} from "../miniprogram_npm/miniprogram_npm/mobx-miniprogram/index"

export const store=observable({
    activeTabBarIndex:0,
    updateActiveTabBarIndex:action(function(index){
        this.activeTabBarIndex=index
    })
})