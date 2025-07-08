// pages/index/index.js
const api = require('../../utils/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: {},
    nowWeather: {},
    city: '',
    today: '',
    loading: true,
    weather_icon: '../../static/weather_icon/999.svg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getLocation();
    const today = new Date();
    this.setData({
      today: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    });
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
    this.getLocation();
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

  },

  toCityPage() {
    wx.navigateTo({
      url: '/pages/city/city',
    });
  },

  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude;
        const longitude = res.longitude;
        this.getAdcode(longitude, latitude);
      },
      fail: () => {
        wx.showToast({
          title: '定位失败，请稍后再试',
          icon: 'none'
        });
      }
    });
  },

  getAdcode(longitude, latitude) {
    api.getAdcode(`${longitude},${latitude}`).then(res => {
      const adcode = res.regeocode.addressComponent.adcode;
      this.getWeather(adcode);
    }).catch(err => {
      console.error(err);
    });
  },

  getWeather(adcode) {
    // 获取预报天气
    api.getForecastWeather(adcode).then(res => {
      if (res.forecasts && res.forecasts.length > 0) {
        // 获取天气代码
        const weatherCode = this.getWeatherCode(res.forecasts[0].casts[0].dayweather);
        
        this.setData({
          weather: res.forecasts[0],
          city: res.forecasts[0].city,
          loading: false,
          weather_icon: `../../static/weather_icon/${weatherCode}.svg`
        });
      } else {
        wx.showToast({
          title: '获取天气预报失败',
          icon: 'none'
        });
      }
      wx.stopPullDownRefresh();
    }).catch(err => {
      console.error('获取预报天气失败:', err);
      this.setData({
        loading: false
      });
      wx.showToast({
        title: '获取天气预报失败',
        icon: 'none'
      });
      wx.stopPullDownRefresh();
    });
    
    // 获取实况天气
    api.getNowWeather(adcode).then(res => {
      if (res.lives && res.lives.length > 0) {
        this.setData({
          nowWeather: res.lives[0]
        });
      }
    }).catch(err => {
      console.error('获取实况天气失败:', err);
    });
  },
  
  // 根据天气描述获取天气代码
  getWeatherCode(weather) {
    const weatherMap = {
      '晴': '100',
      '多云': '101',
      '阴': '104',
      '小雨': '305',
      '中雨': '306',
      '大雨': '306',
      '暴雨': '306',
      '雪': '401',
      '雾': '501'
    };
    
    for (const key in weatherMap) {
      if (weather.includes(key)) {
        return weatherMap[key];
      }
    }
    
    return '999'; // 默认天气图标
  }
})