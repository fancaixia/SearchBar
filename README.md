### SearchBar  微信小程序搜索框
![https://github.com/fancaixia/SearchBar/blob/master/pic/001.png](https://github.com/fancaixia/SearchBar/blob/master/pic/001.png) <br/>
### 页面结构
![https://github.com/fancaixia/SearchBar/blob/master/pic/code.png](https://github.com/fancaixia/SearchBar/blob/master/pic/code.png) <br/>


#### searchBox/index.wxml
```
<!-- 组件模板 -->
<view class="wrapper">

  <slot></slot>
    <view class='tit_seabox'>
        <view class="tit_seabox_bar {{addflag?'tit_seabox_add':''}} {{searchflag?'tit_start_search':''}}">
            <icon type='search' size="32rpx"></icon>
            <input type="text" bindinput="searchList" bindconfirm="endsearchList" bindfocus='getfocus' bindblur="blursearch" confirm-type='search' value='{{searchstr}}' placeholder='请输入...' />
            <icon bindtap='activity_clear' wx:if="{{searchflag}}" type='clear' size="28rpx"></icon>
        
        </view>
        <view wx:if="{{searchflag}}" bindtap='cancelsearch' class="activity_seabtn">取消</view>
        <view class='activity_add' wx:if="{{addflag}}"><image bindtap='addhandle' src='{{addimg}}'></image></view>
    </view>
   
</view>
```
##### searchBox/index.js
```

// 本组件为搜索组件
// 需要传入addflag   值为true / false （搜索框右侧部分）
// 若显示搜索框右侧部分   需传入右侧图标url以及addhandle函数

Component({

  properties: {

    addflag: {    //显示搜索框右侧部分
      type: Boolean,
      value: false,
      observer(newVal, oldVal, changedPath) {

      }
    },
    addimg: {       //显示搜索框右侧部分icon
      type: String,
      value: ''
    },
    searchstr: {     //input  值
      type: String,
      value: '值'
    },
    searchflag: {
      type: Boolean,
      value: false,
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表

   */
  methods: {

    //获得焦点
    getfocus() {
      this.setData({
        searchflag: true,
      })
    },
    //搜索框右侧按钮事件
    addhandle() {
      this.triggerEvent("addhandle");
    },
    //搜索输入
    searchList(e) {
      this.triggerEvent("searchList", e);
    },
    //查询
    endsearchList(e) {

      this.triggerEvent("endsearchList");
    },
    //失去焦点
    blursearch() {
      // console.log('失去焦点')

    },
    // 取消
    cancelsearch() {
      this.setData({
        searchflag: false,
      })
      this.triggerEvent("cancelsearch");
    },
    //清空搜索框
    activity_clear(e) {

      this.triggerEvent("activity_clear");
    },

  }
})

```
##### searchBox/index.wxss
```
.tit_seabox{
  width: calc( 100% - 64rpx );
  background: #fff;
  height: 60rpx;
  padding:20rpx 32rpx;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.tit_seabox_bar{
    width: calc( 100% - 32rpx );
    height: 60rpx;
    display: flex;
    align-items: center;
    border-radius: 30rpx;
    background: #F5F5F5;
    padding-left: 32rpx;
}
/*有权限添加活动*/
.tit_seabox_bar.tit_seabox_add{
  width:calc( 100% - 122rpx );
}
/*开始搜索时*/
.tit_seabox_bar.tit_start_search{
  width: calc( 100% - 102rpx );
}
/*开始搜索且有权限添加*/
.tit_seabox_bar.tit_start_search.tit_seabox_add{
width:calc( 100% - 192rpx );
}
.tit_seabox_bar icon{
  margin-right: 20rpx;

}
.tit_seabox input{
  height:60rpx;
  line-height:60rpx;
  font-size:28rpx;
  width:100%;
  margin-right:32rpx;

}
.activity_add{
  width:60rpx;
  text-align:right;
  border-left:4rpx solid #f2f2f2;
  margin-left:20rpx;

}
.activity_add image{
  width: 40rpx;
  height: 40rpx;
}
.activity_seabtn{
  font-size: 28rpx;
  width: 70rpx;
  text-align: right;
}

```
##### activity_list/index.wxml
```
<!-- 搜索框 -->
<view >
    <SearchBar id="SearchBar" addflag="{{addflag}}" addimg="{{addimg}}" bind:addhandle="addhandle" searchstr="{{searchstr}}" bind:searchList="searchList" bind:endsearchList="endsearchList" bind:cancelsearch="cancelsearch" bind:activity_clear="activity_clear">
    </SearchBar>
</view>
```
##### activity_list/index.js
```
Page({
  data: {
    addflag:true,  //判断是否显示搜索框右侧部分
    addimg:'../../images/activity_add.png',
    searchstr:'',
  },
  onLoad(){

  },
  onShow(){
   
  },

  tap(e) {

  },
 
  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
  },

  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value
    })
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
  },
  //清空搜索框
  activity_clear(e) {

    this.setData({
      searchstr: ''
    })
  },


})
```
##### activity_list/index.json
```
{
  "usingComponents": {
    "SearchBar": "/components/searchBox/index"
  },
  "navigationBarTitleText": "活动管理"
}
```

