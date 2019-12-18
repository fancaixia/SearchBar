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
    console.log(e.detail.value,'模糊查询字段')
    this.setData({
      searchstr: e.detail.value
    })
  },
  //搜索回调
  endsearchList(e) {
    console.log('搜索框回调函数')
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