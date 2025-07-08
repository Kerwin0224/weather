const KEY = 'ea0795ca865777e296860825eac09879'; // 需要替换为自己的key
const amapUrl = 'https://restapi.amap.com/v3/weather/weatherInfo';
const regeoUrl = 'https://restapi.amap.com/v3/geocode/regeo';

const request = (url, params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method: 'GET',
      data: {
        ...params,
        key: KEY
      },
      success: (res) => {
        if (res.data && res.data.status === '1') {
          resolve(res.data);
        } else {
          reject(new Error(res.data.info || '请求失败'));
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};

// 获取实况天气
const getNowWeather = (city) => {
  return request(amapUrl, { city, extensions: 'base' });
};

// 获取预报天气
const getForecastWeather = (city) => {
  return request(amapUrl, { city, extensions: 'all' });
};

// 逆地理编码
const getAdcode = (location) => {
  return request(regeoUrl, { location });
};

module.exports = {
  getNowWeather,
  getForecastWeather,
  getAdcode
};