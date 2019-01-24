// miniprogram/pages/index/index.js
var common = require('../../common/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight:0,
    dateselectfalg:false,
    groupname:"今晚打老虎",
    usrname:"me",
    groupinfo:"lalalalalala",
    month:10,
    /*
    dateobject:{
      month:"10",
      date:"1",
      dateavail:true,
      num:"1",
      who:["le"],
      usrselected:true,
      backgroundcolor:"green",
      textcolor:""
    },
    */
    dateobjectarray:[{}],
    selectedarray:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tmp
    common.frech(this.data.groupname,tmp)
    
    this.setData({
      screenHeight: wx.getSystemInfoSync().windowHeight - wx.getSystemInfoSync().statusBarHeight,
      dateobjectarray: common.dateobjectarrayinit("10")
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

  },

  dateselect:function(e){
    var index = e.currentTarget.dataset.index
    //检查“选择日期”按键是否选中
    if(this.data.dateselectfalg)
    {
      var usrselected = this.data.dateobjectarray[index].usrselected
      let indexusrselect = `dateobjectarray[${index}].usrselected`
      let indexbackgroundcolor = `dateobjectarray[${index}].backgroundcolor`
      let selected = `selectarray[${index}]`
      if (!usrselected) {
        this.setData({
          [indexbackgroundcolor]:"green",
          [indexusrselect]: !usrselected,
        })
      }
      else{
        this.setData({
          [indexbackgroundcolor]: "",
          [indexusrselect]: !usrselected
        })
      }
    }
  },
  beginselected:function()
  {
    var flag = this.data.dateselectfalg
    this.setData({
      dateselectfalg: !flag
    })
  },
  saveselected:function()
  { 
    common.frech(this.data.groupname)

    for(var i;i<35;i++)
    {
      //this.data.dateobjectarray[i]
      
    }
    var flag = this.data.dateselectfalg
    this.setData({
      dateselectfalg: !flag
    })
  },
  freshbutton:function()
  {
    common.frech(this.data.groupname)
  }
})