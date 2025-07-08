// pages/city/city.js
const { cityData } = require('../../utils/city_data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchVal: '',
    cities: cityData,
    results: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      results: this.data.cities
    });
  },

  onSearch(e) {
    const searchVal = e.detail.value;
    this.setData({
      searchVal
    });

    if (searchVal) {
      const results = this.data.cities.filter(item => item.name.includes(searchVal));
      this.setData({ results });
    } else {
      this.setData({ results: this.data.cities });
    }
  },

  selectCity(e) {
    const { adcode, city } = e.currentTarget.dataset;
    const pages = getCurrentPages();
    const prevPage = pages[pages.length - 2]; // 获取上一个页面
    prevPage.getWeather(adcode);
    wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})