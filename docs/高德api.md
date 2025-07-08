Title: 天气查询-高级 API 文档-开发指南-Web服务 API | 高德地图API

URL Source: https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo

Markdown Content:
天气查询-高级 API 文档-开发指南-Web服务 API | 高德地图API

===============

[](https://lbs.amap.com/)

[控制台](javascript:void(0))

[登录](javascript:void(0))[注册](https://lbs.amap.com/dev/id/)[](https://id.amap.com/?type=spa&ref=https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo)

![Image 1](https://a.amap.com/pc/static/img/amaplogo.png)

*    退出 
*   [我的消息](https://console.amap.com/dev/message/inbox)
*   [云图市场](https://console.amap.com/dev/market/consult)
*   [应用管理](https://console.amap.com/dev/key)
*   [GeoHUB](https://geohub.amap.com/)

[产品介绍](javascript:void(0))

**产品介绍**高德开放平台产品介绍[查看全部文档](https://lbs.amap.com/api)
*    搜索定位  [**鸿蒙星河版定位SDK _HOT_**鸿蒙星河版定位SDK](https://lbs.amap.com/api/harmonyosnext-location-sdk) [**搜索 _HOT_**位置、周边、行政区、ID等查询接口](https://lbs.amap.com/product/search#/)[API](https://lbs.amap.com/api/webservice/guide/api/search)[JS](https://lbs.amap.com/api/javascript-api-v2/tutorails/search-poi)[Android](https://lbs.amap.com/api/android-sdk/guide/map-data/poi)[iOS](https://lbs.amap.com/api/ios-sdk/guide/map-data/poi) [**定位 _HOT_**基于LBS的定位服务](https://lbs.amap.com/product/locate#/)[API](https://lbs.amap.com/api/webservice/guide/api/ipconfig)[Android](https://lbs.amap.com/api/android-location-sdk/locationsummary/)[iOS](https://lbs.amap.com/api/ios-location-sdk/summary/) [**地理/逆地理编码**位置名称与经纬度之间转换服务](https://lbs.amap.com/api/webservice/guide/api/georegeo)[API](https://lbs.amap.com/api/webservice/guide/api/georegeo)[JS](https://lbs.amap.com/api/javascript-api-v2/guide/services/geocoder)[Android](https://lbs.amap.com/api/android-sdk/guide/map-data/geo)[iOS](https://lbs.amap.com/api/ios-sdk/guide/map-data/geo) [**地理围栏**虚拟空间围栏服务](https://lbs.amap.com/api/track/lieying-kaifa/api/track_fence)[API](https://lbs.amap.com/api/track/lieying-kaifa/api/track_fence)[Android](https://lbs.amap.com/api/android-location-sdk/guide/additional-func/local-geofence)[iOS](https://lbs.amap.com/api/ios-location-sdk/guide/additional-func/local-geofence) [**天气查询**查询目标区域当前/未来天气](https://lbs.amap.com/api/webservice/guide/api/weatherinfo) [**智能硬件定位**通过基站、Wifi获取位置信息](https://lbs.amap.com/api/webservice/guide/api-advanced/hardware-location)  
*    路线导航  [**鸿蒙星河版导航SDK _NEW_**鸿蒙星河版导航SDK](https://lbs.amap.com/api/harmonyosnext-navi-sdk/summary) [**导航 _HOT_**轻松地在APP中加入导航能力](https://lbs.amap.com/product/navigation#/)[Android](https://lbs.amap.com/api/android-navi-sdk/summary/)[iOS](https://lbs.amap.com/api/ios-navi-sdk/summary) [**路线规划 _HOT_**提供步行、驾车等规划能力](https://lbs.amap.com/product/path)[API](https://lbs.amap.com/api/webservice/guide/api/direction)[JS](https://lbs.amap.com/api/javascript-api-v2/tutorails/car-dir)[Android](https://lbs.amap.com/api/android-navi-sdk/guide/route-plan/drive-route-plan)[iOS](https://lbs.amap.com/api/ios-navi-sdk/guide/route-plan/drive-route-plan) [**猎鹰服务**提供专业轨迹管理服务](https://lbs.amap.com/product/track-sdk)[API](https://lbs.amap.com/api/track/summary/)[Android](https://lbs.amap.com/api/android-track/summary/)[iOS](https://lbs.amap.com/api/ios-track/summary/) [**货车路径规划**专业的货车路径规划服务](https://lbs.amap.com/api/logistic-service/guide/wagon_path/truck-route-plan-basis)[API](https://lbs.amap.com/api/logistic-service/guide/wagon_path/truck-route-plan-basis)[Android](https://lbs.amap.com/api/android-navi-sdk/guide/truck-navi/truck-route-guide)[iOS](https://lbs.amap.com/api/ios-navi-sdk/guide/truck-navi/truck-route-guide) [**智能调度引擎**智能外勤调度，提升效益](https://lbs.amap.com/product/scope) [**物流服务**提供智慧物流API服务接口](https://lbs.amap.com/api/logistic-service/summary) [**公交信息查询**查询公交信息](https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry) [**交通路况查询**查询交通态势情况](https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry) [**高级路径规划**高级路径规划等能力](https://lbs.amap.com/api/webservice/guide/api-advanced/advanced-path)  
*    地图产品  [**鸿蒙星河版地图SDK _HOT_**鸿蒙星河版-轻量地图SDK](https://lbs.amap.com/api/harmonyosnext-map3d-sdk) [**动态地图 _HOT_**动态地图展示、配置](https://lbs.amap.com/api/javascript-api-v2/summary)[API](https://lbs.amap.com/api/lightmap/summary/)[JS](https://lbs.amap.com/api/javascript-api-v2/summary)[Android](https://lbs.amap.com/api/android-sdk/summary/)[iOS](https://lbs.amap.com/api/ios-sdk/summary/)[HarmonyOS](https://lbs.amap.com/api/harmonyos-sdk/summary) [**3D地图 _HOT_**3D动态地图展示、配置](https://lbs.amap.com/api/javascript-api-v2/guide/map/3d-map) [**地铁图**简单易用的移动端地铁线路图开发接口](https://lbs.amap.com/api/subway-api/subway-summary/)[JS](https://lbs.amap.com/api/subway-api/subway-summary/)[Android](https://lbs.amap.com/api/amap-mobile/guide/android/subway)[iOS](https://lbs.amap.com/api/amap-mobile/guide/ios/subway) [**静态地图**灵活地将高德地图迁入应用网页](https://lbs.amap.com/api/webservice/guide/api/staticmaps) [**3D地形图**卫星地形图还原真实地形地貌](https://lbs.amap.com/product/terrain#/)  
*    高级地图工具  [**世界地图 _NEW_**](https://lbs.amap.com/solution/abroad) [**自定义地图**](https://lbs.amap.com/product/geohub#mapstyle) [**地图数据可视化 (LOCA)**](https://lbs.amap.com/product/loca#/) [**地图数据中心 (GeoHUB)**](https://lbs.amap.com/product/geohub#/geohub) [**坐标拾取器**](https://lbs.amap.com/tools/picker) [**高德地图URI Web**](https://lbs.amap.com/api/uri-api/summary/) [**高德地图URI APP**](https://lbs.amap.com/api/amap-mobile/summary/) [**三维模型转换**](https://lbs.amap.com/tools/gltf) [**微信小程序插件**](https://lbs.amap.com/api/wx/summary/) [**地图Flutter插件**](https://lbs.amap.com/api/flutter/summary) [**地图名片**](https://lbs.amap.com/tools/card)  
*    高德地图小程序  [**地图小程序**](https://lbs.amap.com/product/wia) [**客户管理**](https://lbs.amap.com/product/wia?pos=customer_manage) [**员工管理**](https://lbs.amap.com/product/wia?pos=staff_manage) [**送货提效**](https://lbs.amap.com/product/wia?pos=delivery_effect_raising) [**地图小程序API**](https://lbs.amap.com/api/wia-openapi/product)  

[解决方案](javascript:void(0))

**解决方案**提供各行业LBS解决方案
*   [**智能手表 _NEW_**提供智能守护与运动出行解决方案](https://lbs.amap.com/solution/smartwatch) [**智能眼镜 _NEW_**智能眼镜实时导航及智慧出行解决方案](https://lbs.amap.com/solution/smartglasses) [**世界地图 _NEW_**面向开发者提供全球范围内LBS服务](https://lbs.amap.com/solution/abroad) [**智能两轮车 _NEW_**合规精确的两轮车场景导航](https://lbs.amap.com/solution/two-wheeled-vehicle) [**手机银行 _NEW_**提供手机银行APP地图应用](https://lbs.amap.com/solution/mobilebanking)  
*   [**网格化营销 _NEW_**提供银行网格化营销场景应用](https://lbs.amap.com/solution/bankmarketing) [**智慧交通**优化交通资源配置，赋能智慧交通系统](https://jiaotong.amap.com/) [**出行**提供网约车等出行场景解决方案](https://mobility.amap.com/) [**O2O**到店、到家等多种O2O业务解决方案](https://lbs.amap.com/solution/o2o) [**上门服务调度**提供上门业务调度解决方案](https://lbs.amap.com/solution/onsite)  
*   [**三农场景可视化 _NEW_**提供乡村振兴三农场景应用](https://lbs.amap.com/solution/agrodeveloping) [**社交**社交应用位置服务解决方案](https://lbs.amap.com/solution/social) [**运动**运动类应用解决方案](https://lbs.amap.com/solution/sport) [**智能硬件**智能硬件LBS解决方案](https://lbs.amap.com/solution/smarthard) [**零售铺货**零售快消行业，渠道铺货解决方案](https://lbs.amap.com/solution/retail)  
*   [**智慧物流**针对物流行业提供解决方案](https://lbs.amap.com/solution/truck) [**电商**电商物流行业解决方案](https://lbs.amap.com/solution/e-commerce) [**地址服务**综合地址服务，满足客户全景化需求](https://lbs.amap.com/product/smart-address) [**企业智图**一张图轻松管理企业数据](https://lbs.amap.com/product/me) [**智能派单**一站式精准智能派单解决方案](https://lbs.amap.com/solution/dispatch)  

[文档与支持](javascript:void(0))

**文档与支持**高德开放平台开发文档与服务支持[查看全部文档](https://lbs.amap.com/api)
*    API  [**Web基础服务API**](https://lbs.amap.com/api/webservice/summary) [**Web高级服务API**](https://lbs.amap.com/api/webservice/guide/api-advanced/search) [**物流服务API**](https://lbs.amap.com/api/logistic-service/summary) [**猎鹰服务 API**](https://lbs.amap.com/api/track/summary/)  
*    JS API  [**JS API**](https://lbs.amap.com/api/javascript-api-v2) [**数据可视化JS API**](https://lbs.amap.com/api/loca-v2) [**地图组件**](https://lbs.amap.com/api/lightmap) [**URI API**](https://lbs.amap.com/api/uri-api) [**地铁图 JS API**](https://lbs.amap.com/api/subway-api/subway-summary/)  
*    Android 平台  [**Android 地图SDK**](https://lbs.amap.com/api/android-sdk/summary/) [**Android 轻量版地图SDK**](https://lbs.amap.com/api/lightweight-android-sdk/summary) [**Android 定位SDK**](https://lbs.amap.com/api/android-location-sdk/locationsummary/) [**Android 导航SDK**](https://lbs.amap.com/api/android-navi-sdk/summary/) [**Android 猎鹰SDK**](https://lbs.amap.com/api/android-track/summary/)  
*    iOS 平台  [**iOS 地图SDK**](https://lbs.amap.com/api/ios-sdk/summary/) [**iOS 轻量版地图SDK**](https://lbs.amap.com/api/lightweight-ios-sdk/summary) [**iOS 定位SDK**](https://lbs.amap.com/api/ios-location-sdk/locationsummary/) [**iOS 导航SDK**](https://lbs.amap.com/api/ios-navi-sdk/summary/) [**iOS 猎鹰SDK**](https://lbs.amap.com/api/ios-track/summary/)  
*    鸿蒙星河版平台  [**鸿蒙星河版地图SDK _HOT_**](https://lbs.amap.com/api/harmonyosnext-map3d-sdk) [**鸿蒙星河版定位SDK _HOT_**](https://lbs.amap.com/api/harmonyosnext-location-sdk) [**鸿蒙星河版导航SDK _NEW_**](https://lbs.amap.com/api/harmonyosnext-navi-sdk/summary)  
*    大模型开发工具  [**MCP Server _NEW_**](https://lbs.amap.com/api/mcp-server)  
*    服务与支持  [**常见问题**](https://lbs.amap.com/faq) [**创建工单**](https://console.amap.com/dev/ticket/type) [**示例中心**](https://lbs.amap.com/demo/center) [**合规中心**](https://lbs.amap.com/compliance-center/ability/sdk-security-review) [**商用授权查询**](https://lbs.amap.com/commercial)  

[定价](javascript:void(0))

**定价**开放平台产品定价[产品定价](https://lbs.amap.com/upgrade#price)
*    产品定价  [**产品定价**](https://lbs.amap.com/upgrade#price) [**商用服务**](https://lbs.amap.com/upgrade#business) [**GeoHUB自定义地图**](https://lbs.amap.com/upgrade#mapstyle) [**GeoHUB数据中心**](https://lbs.amap.com/upgrade#mapdata)  
*    产品升级  [**高级能力**](https://lbs.amap.com/upgrade#pro) [**企业智图SaaS**](https://lbs.amap.com/upgrade#me) [**云图市场**](https://lbs.amap.com/market)  

[为什么选择高德](https://lbs.amap.com/advantage)

[](javascript:void(0))

[](javascript:void(0))

![Image 2](https://lbs.amap.com/public/img/header/loading.gif)

**历史记录**

**热门推荐**
*   [**Android定位**Android定位问题相关](https://lbs.amap.com/search?s=Android%E5%AE%9A%E4%BD%8D)
*   [**浏览器定位**JS API提供Geolocation定位插件](https://lbs.amap.com/search?s=%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%9A%E4%BD%8D)
*   [**逆地理编码**经纬度转换为详细结构化的地址](https://lbs.amap.com/search?s=%E9%80%86%E5%9C%B0%E7%90%86%E7%BC%96%E7%A0%81)
*   [**自定义地图**7大类44种地图元素可定制](https://lbs.amap.com/search?s=%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9C%B0%E5%9B%BE)
*   [**认证开发商**商业授权相关问题](https://lbs.amap.com/search?s=%E8%AE%A4%E8%AF%81%E5%BC%80%E5%8F%91%E5%95%86)

Web服务 API

*   [概述](https://lbs.amap.com/api/webservice/summary)
*   [创建应用和 Key](https://lbs.amap.com/api/webservice/create-project-and-key)
*   [入门指南](https://lbs.amap.com/api/webservice/gettingstarted)
*    开发指南 
    *   基础 API 文档
        *   [地理/逆地理编码](https://lbs.amap.com/api/webservice/guide/api/georegeo)
        *   [路径规划](https://lbs.amap.com/api/webservice/guide/api/direction)
        *   [路径规划 2.0](https://lbs.amap.com/api/webservice/guide/api/newroute)
        *   [行政区域查询](https://lbs.amap.com/api/webservice/guide/api/district)
        *   [交通事件](https://lbs.amap.com/api/webservice/guide/api/traffic-incident)
        *   [IP定位](https://lbs.amap.com/api/webservice/guide/api/ipconfig)
        *   [静态地图](https://lbs.amap.com/api/webservice/guide/api/staticmaps)
        *   [坐标转换](https://lbs.amap.com/api/webservice/guide/api/convert)
        *   [轨迹纠偏](https://lbs.amap.com/api/webservice/guide/api/grasproad)

    *   高级 API 文档
        *   [搜索POI](https://lbs.amap.com/api/webservice/guide/api-advanced/search)
        *   [搜索POI 2.0](https://lbs.amap.com/api/webservice/guide/api-advanced/newpoisearch)
        *   [输入提示](https://lbs.amap.com/api/webservice/guide/api-advanced/inputtips)
        *   [天气查询](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo)
        *   [高级IP定位](https://lbs.amap.com/api/webservice/guide/api-advanced/ip)
        *   [智能硬件定位](https://lbs.amap.com/api/webservice/guide/api-advanced/hardware-location)
        *   [交通态势查询](https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry)
        *   [公交信息查询](https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry)
        *   [高级路径规划](https://lbs.amap.com/api/webservice/guide/api-advanced/advanced-path)

    *   GeoHUB API文档
        *   [三方数据空间检索](https://lbs.amap.com/api/webservice/guide/geohub/place)

    *   实用工具
        *   [错误码说明](https://lbs.amap.com/api/webservice/guide/tools/info)
        *   [流量限制说明](https://lbs.amap.com/api/webservice/guide/tools/flowlevel)
        *   [天气对照表](https://lbs.amap.com/api/webservice/guide/tools/weather-code)

*   [常见问题](https://lbs.amap.com/faq/webservice/webservice-api/basic-configuration)
*   [更新日志](https://lbs.amap.com/api/webservice/changelog)
*   [相关下载](https://lbs.amap.com/api/webservice/download)

[开发](https://lbs.amap.com/api)Web服务 API 开发指南 高级 API 文档 天气查询

天气查询 最后更新时间: 2025年03月18日
========================

产品介绍
----

天气查询是一个简单的 HTTP 接口，根据用户输入的 adcode，查询目标区域当前/未来的天气情况。

提示
如需更高精度，或者更多深度内容（如积水、积雪）等高级天气能力，请通过[工单](https://console.amap.com/dev/ticket/create/66)进行商务咨询。

适用场景
----

需要使用相关天气查询的时候。

使用限制
----

服务调用量的限制请点击[这里](https://lbs.amap.com/api/webservice/guide/tools/flowlevel)查阅。

使用说明
----

1

第一步

 申请 [【Web服务API】](https://console.amap.com/dev/key/app)密钥（Key） 

2

第二步

 拼接 HTTP 请求 URL，第一步申请的 Key 需作为必填参数一同发送 

3

第三步

 接收 HTTP 请求返回的数据（JSON 或 XML 格式），解析数据 

 如无特殊声明，接口的输入参数和输出数据编码全部统一为 UTF-8。 

成为开发者并创建 Key
为了正常调用 Web 服务 API，请先注册成为高德开放平台开发者，并申请 Web 服务的 key，点击[具体操作](https://lbs.amap.com/api/webservice/create-project-and-key)。

天气查询
----

#### 天气查询API服务地址

URL 请求方式
https://restapi.amap.com/v3/weather/weatherInfo?parameters GET

parameters 代表的参数包括必填参数和可选参数。所有参数均使用和号字符(&)进行分隔。下面的列表枚举了这些参数及其使用规则。 

#### 请求参数

参数名 含义 规则说明 是否必须 缺省值
key 请求服务权限标识 用户在高德地图官网[申请 web 服务 API 类型 KEY](https://lbs.amap.com/dev/)必填 无
city 城市编码 输入城市的 adcode，adcode 信息可参考[城市编码表](https://lbs.amap.com/api/webservice/download)必填 无
extensions 气象类型 可选值：base/all

base:返回实况天气

all:返回预报天气 可选 无
output 返回格式 可选值：JSON,XML 可选 JSON

#### 返回结果参数说明

实况天气每小时更新多次，预报天气每天更新3次，分别在8、11、18点左右更新。由于天气数据的特殊性以及数据更新的持续性，无法确定精确的更新时间，请以接口返回数据的 reporttime 字段为准。[天气结果对照表>>](https://lbs.amap.com/api/webservice/guide/tools/weather-code/)

名称 含义 规则说明
status 返回状态 值为0或1

1：成功；0：失败
count 返回结果总数目
info 返回的状态信息
infocode 返回状态说明,10000代表正确
lives 实况天气数据信息
province 省份名
city 城市名
adcode 区域编码
weather 天气现象（汉字描述）
temperature 实时气温，单位：摄氏度
winddirection 风向描述
windpower 风力级别，单位：级
humidity 空气湿度
reporttime 数据发布的时间
forecast 预报天气信息数据
city 城市名称
adcode 城市编码
province 省份名称
reporttime 预报发布时间
casts 预报数据 list 结构，元素 cast,按顺序为当天、第二天、第三天的预报数据
date 日期
week 星期几
dayweather 白天天气现象
nightweather 晚上天气现象
daytemp 白天温度
nighttemp 晚上温度
daywind 白天风向
nightwind 晚上风向
daypower 白天风力
nightpower 晚上风力

#### 服务示例

`https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=<用户key>`

| 参数 | 值 | 备注 | 必选 |
| --- | --- | --- | --- |
| city |  | 需要查询天气的城市编码 | 否 |

运行 全部展开 全部折叠 清空 是查询的城市范围，offset(20)为每

这篇文档有帮助吗？

完全没有 非常有

功能咨询请点击[创建工单](https://console.amap.com/dev/ticket/type)

本页目录

*   [产品介绍](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#t0 "产品介绍")
*   [适用场景](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#t1 "适用场景")
*   [使用限制](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#t2 "使用限制")
*   [使用说明](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#t3 "使用说明")
*   [天气查询](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#t4 "天气查询")
*   [天气查询API服务地址](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#s0 "天气查询API服务地址")
*   [请求参数](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#s1 "请求参数")
*   [返回结果参数说明](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#s2 "返回结果参数说明")
*   [服务示例](https://lbs.amap.com/api/webservice/guide/api-advanced/weatherinfo#s3 "服务示例")

*   **新手入门**[产品与服务](https://lbs.amap.com/product/map)[解决方案](https://lbs.amap.com/solution/transportation)[开发文档](https://lbs.amap.com/api)
*   **商务合作**[商务合作](https://lbs.amap.com/cooperation/cooperation/)[商家合作](https://lbs.amap.com/cooperation/poi/index/)
*   **常见问题**[账号问题](https://lbs.amap.com/faq/account/account)[定位反馈](https://lbs.amap.com/faq/top/feedback/268)[常见问题汇总](https://lbs.amap.com/faq/account/registered)[服务协议](https://lbs.amap.com/home/terms/)[隐私权政策](https://lbs.amap.com/home/privacy/)[免责声明](https://lbs.amap.com/home/disclaimer/)[数据退出](https://lbs.amap.com/agreement/user_device)
*   **开放平台**关注我们 微信![Image 3](https://a.amap.com/lbs/static/img/gaode_qr.jpg)[微博](https://weibo.com/gaodedituapi "高德开放平台新浪微博")

[阿里巴巴集团](http://www.alibabagroup.com/cn/global/home) | [淘宝网](https://www.taobao.com/) | [天猫](https://www.tmall.com/) | [聚划算](https://ju.taobao.com/) | [全球速卖通](http://www.aliexpress.com/) | [阿里巴巴国际交易市场](http://www.alibaba.com/) | [1688](http://www.1688.com/) | [阿里妈妈](http://www.alimama.com/) | [飞猪](http://www.fliggy.com/) | [阿里云计算](http://www.aliyun.com/) | [AliOS](https://www.alios.cn/) | [阿里通信](http://www.aliqin.cn/) | [一淘](http://www.etao.com/) | [万网](http://www.net.cn/) | [高德](http://www.autonavi.com/) | [UC](http://www.uc.cn/) | [友盟](http://www.umeng.com/) | [虾米](http://www.xiami.com/) | [阿里星球](http://www.alibabaplanet.com/) | [点点虫](http://www.ddchong.com/) | [钉钉](http://www.dingtalk.com/) | [支付宝](https://www.alipay.com/) | [优酷](http://www.youku.com/) | [土豆](http://www.tudou.com/) | [阿里健康](http://www.alihealth.cn/) | [阿里影业](http://www.alibabapictures.com/simp/0-home.html) | [阿里体育](http://www.alisports.com/cn/) | [网商银行](https://www.mybank.cn/) | [高德打车企业版](https://es.amap.com/) | [高德地图汽车业务中心](https://auto.amap.com/) | [高德智慧景区](https://lvyou.amap.com/)

 © 2002-2025 Amap.com 版权所有 | [京ICP备2023020281号-12](https://beian.miit.gov.cn/) | 甲测资字11112528 | 甲测资字11111093

[![Image 4](https://a.amap.com/lbs-dev-yuntu/static/web/image/common/beian.png)京公网安备 11010502056787号](https://beian.mps.gov.cn/#/query/webSearch?code=11010502056787)

[返回顶部](javascript:void(0);)[示例中心](https://lbs.amap.com/demo/center)[常见问题](https://lbs.amap.com/faq)[智能客服](javascript:void(0))[公众号 二维码![Image 5](https://a.amap.com/lbs-dev-yuntu/static/web/image/qrcode.jpg)](javascript:void(0))
