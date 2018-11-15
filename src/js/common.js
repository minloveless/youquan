import axios from 'axios';
import crypto from 'crypto'
import store from '../vuex/store'
import $router from '../router/index.js'
import qs from 'qs'
import Vue from 'vue'


var jscHttpUrl = wholeUrl == 1 ? "https://inhdfix.huisou.cn/app" : (wholeUrl == 2 ? "https://inhd.huisou.cn/app" : wholeUrl == 4 ? "https://hdrelease.huisou.cn/app" : "https://hd.huisou.cn/app") //数据接口访问域名
//项目ID根据不同项目可以更改
var projectID = 1;
SetSessProjectID(projectID)


//获取projectID
function GetSessProjectID(){
  if(isWeiXin()  == true){
    var strValue = window.localStorage.getItem('hdProject_ID');
    if(strValue  == "" || strValue == null || strValue  == undefined){
      SetSessProjectID(projectID);
    }else{
      strValue = strValue;
    }
  }else{
    var strValue = window.sessionStorage.getItem('hdProject_ID');
    if(strValue  == "" || strValue == null || strValue  == undefined){
      SetSessProjectID(projectID);
    }else{
      strValue = strValue;
    }
  }
  
  return strValue
}
GetSessProjectID();
//储存projectID
function SetSessProjectID(projectId){
  if(isWeiXin()  == true){
    var strValue = window.localStorage.getItem('hdProject_ID');
    if(strValue != projectId){
      window.localStorage.setItem('hdProject_ID',projectId);
    }
  }else{
    var strValue = window.sessionStorage.getItem('hdProject_ID');
    if(strValue != projectId){
      window.sessionStorage.setItem('hdProject_ID',projectId);
    }
  }
  
}

//储存用户token
function SetSessUserTo(strValue){
  if(isWeiXin()  == true){
    window.localStorage.setItem('hdUserTo',strValue);
  }else{
    window.sessionStorage.setItem('hdUserTo',strValue);
  }
  
}

//清楚缓存
function clearLocal(){
  localStorage.removeItem('hdUserTo');
  sessionStorage.removeItem('hdUserTo');
  alert("清除缓存成功")
}

//获取用户token
function GetSessUserTo(){
  if(isWeiXin() == true){
    var strValue = window.localStorage.getItem('hdUserTo')||$router.history.current.query["token"];
    if(GetString(strValue)  == ""){
      strValue = '';
    }else{
      strValue = strValue;
    }
  }else{
    var strValue = window.sessionStorage.getItem('hdUserTo')||$router.history.current.query["token"];
    if(GetString(strValue)  == ""){
      strValue = '';
    }else{
      strValue = strValue;
    }
  }
  
  return strValue
}

export function HttpRequest(type,strMethod, strParameter,hideLoad) { //不需要loading动画的借口hideLoad == true
	return new Promise((resolve, reject) => {
    !hideLoad&&store.commit("showLoad",1)
    if(type == 'get'){
      let strArrParam =JSON.parse(strParameter)
      strArrParam.webpage = "";
      console.log(11,strParameter)      
      strArrParam = GetVisitData(JSON.stringify(strArrParam))
      console.log(strArrParam)
      //  { params : {
      //   param :strArrParam
      // }}JSON.parse(strParameter)
      axios.get(jscHttpUrl + strMethod, { params :  {
        param :strArrParam
      }})
        .then(response => {
          //var data = solveVisitData(response.data.param)
          !hideLoad&&store.commit("showLoad",-1)
          if(response.data.hint == '请先登录'){
            store.commit("loginGet")
          }else if(response.data.code == '40004'){
            $router.push({path: '/login'})
          }else{
            resolve(response);
          }
        })
        .catch((error) => {
          !hideLoad&&store.commit("showLoad",-1)
          reject(error)
        })
      
    }else{
      let strArrParam = qs.parse(strParameter)
      strArrParam.webpage = ""
      console.log(12,strParameter)      
      strArrParam = GetVisitData(JSON.stringify(strArrParam))
      console.log(strArrParam)
      //strArrParam = GetVisitData(strArrParam)
      //{
      //   param: strArrParam,
      // }
      //qs.parse(strParameter)
      axios.post(jscHttpUrl + strMethod , {
        param: strArrParam,
      })
			.then(response => {
        !hideLoad&&store.commit("showLoad",-1)
        if(response.data.hint == '请先登录'){
          store.commit("loginPost")
        }else if(response.data.code == '40004'){
          $router.push({path: '/login'})
        }else{
          resolve(response);
        }
        
			})
			.catch((error) => {
        !hideLoad&&store.commit("showLoad",-1)
        reject(error)
        
      })
      
    }
		
  })
  
}



//截取页面参数
function getParameter(pName) {
  return $router.history.current.query[pName] === undefined ? '':decodeURIComponent($router.history.current.query[pName])
  // if(router.history.current.query[pName]){

  // }
  // var url = window.location.href,
  //   start = url.indexOf("?") + 1,
  //   paras = {};
  // if(start !== 0) {
  //   var queryString = url.substring(start),
  //     paraNames = queryString.split("&"),
  //     arr = [],
  //     i = 0;
  //   for(; i < paraNames.length; i++) {
  //     arr = paraNames[i].split("=");
  //     if(i === paraNames.length - 1) {
  //       var sIndex = arr[1].indexOf("#");
  //       if(sIndex !== -1) {
  //         arr[1] = arr[1].substring(0, sIndex);
  //       }
  //     }
  //     paras[arr[0]] = arr[1]
  //   }
  // }
  // return decodeURIComponent(paras[pName] || "");
}
//微信title
var setDocumentTitle = function (title) {
  $router.history.current.meta.title = title
};

//判断参数是否为""
function GetString(objValue) {
  if (objValue + "$" == "$" || objValue + "$" == "null$" || objValue + "$" == "undefined$") {
    return "";
  } else {
    return new String(objValue);//new String 强制转换字符串
  }
}

//rsa加密
function GetVisitData(strParameter) {
  let jse = new JSEncrypt();
  jse.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeNtKLeA4RI3GQgAINz+vICo1wLlP8lp67FLv4B+WZ2E2Fuf6QXsj5hqEwhaUt5a5O8wL1ughoD/QI7zyTrgac5mJwj8G+kxaYwg8UIgttxBHVwpSbA2jvLz3cHnWc8nrnSLxZe/uO8bO8kv4nJCFfaWYhjXG300p1hUmbQjvT2wIDAQAB-----END PUBLIC KEY-----");
  var encryptData = jse.encrypt(strParameter);
  //console.log(decrypted)
  return encryptData
}

//rsa解密
function solveVisitData(strParameter) {
 
  // var baseVal = window.atob(strParameter);
  //console.log(strParameter)
  let jse = new JSEncrypt();
  var aaa = 'as123556'
  jse.setPrivateKey("-----BEGIN PRIVATE KEY-----MIICXAIBAAKBgQCeNtKLeA4RI3GQgAINz+vICo1wLlP8lp67FLv4B+WZ2E2Fuf6QXsj5hqEwhaUt5a5O8wL1ughoD/QI7zyTrgac5mJwj8G+kxaYwg8UIgttxBHVwpSbA2jvLz3cHnWc8nrnSLxZe/uO8bO8kv4nJCFfaWYhjXG300p1hUmbQjvT2wIDAQABAoGASWOkxo0p+Uk3pI+8ZCvOczxx31eeHczAVIeJqcP//R0Y2K8uJknRb+3DV36m4GNqN7UB6nog7CR6TqqqrtZKukJgMCIhiNd93a17R6TeevBoOSan9pbpH+Z6UHFWTV/bVsSbqMEeITHUEqJDGcd6LMYZWFUmifDz3sj4KeDRBgECQQDOM2M5+M/+Nko+I6M/oG40h3hdB4iXnFPW9yhNwEPuHFsZt7PFhfQjk/g4c0hS3HPWgFbHAotylPO92mO5ugFHAkEAxGybDwi0bxfo1AM/B9K/TPQv//M5xhNJSx7lkd09nRZoWBeq3CCzdl21WDQiGMf7vWxFzXM5HVvovp43UqfCzQJAMGjMEN4jJpFkWLZRKyzk8pwjW+Pa440l+b/IzIgo6ovpr137bJIIQRoKGmamQh3TbDZxKQOl7V6e4qGU7BOJHQJAOkkb7ecgW4LVxOu9rV2dBIHFKIcNEriwXAksCA+Fc/KtPc6wFafiePIvmJ/HqmDVU40oXWGehha6xq1+Lxm21QJBAJ15vADF7/uURb9CcUo/nocd07UB206J7mbetvE3DAmpqIJ1ugUaMUpMQs5zGNODpBN6QqWNoD1P8ciYUgn89uw=-----END PRIVATE KEY-----");
  var encryptData = jse.encrypt(aaa);
  console.log(encryptData)
  jse.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeNtKLeA4RI3GQgAINz+vICo1wLlP8lp67FLv4B+WZ2E2Fuf6QXsj5hqEwhaUt5a5O8wL1ughoD/QI7zyTrgac5mJwj8G+kxaYwg8UIgttxBHVwpSbA2jvLz3cHnWc8nrnSLxZe/uO8bO8kv4nJCFfaWYhjXG300p1hUmbQjvT2wIDAQAB-----END PUBLIC KEY-----");
  let decrypted = jse.decrypt(encryptData)
  console.log(15,decrypted)
  return encryptData
  
}

//md5加密
function getmd5(strValue){
    var str;
    var md5 = crypto.createHash("md5");
    md5.update(strValue);
    var str = md5.digest('hex');
    return str
}
//获取当前年月日时分秒 格式YYMMDDHHMMSS
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  if (hour >= 0 && hour <= 9) {
    hour = "0" + hour;
  }
  if (minute >= 0 && minute <= 9) {
    minute = "0" + minute;
  }
  var currentdate = date.getFullYear()  + month + strDate
          + hour +  minute;
  return currentdate;
}
//判断用户是否在微信中打开
function isWeiXin(){ 
  var ua = navigator.userAgent.toLowerCase(); 
   if(ua.indexOf('micromessenger') != -1) { 
       return true; 
   } else { 
       return false; 
   } 
}
//微信分享
function wxShare(obj,url,callback){
  var arrParameter = JSON.stringify({
      project_id:1,
      web_url:url
    });
    //console.log(arrParameter)
    HttpRequest("get","/share/conf/get", arrParameter,true)
      .then(res => {
        var data = {
          appId : res.data.list.conf.appId,
          timestamp :res.data.list.conf.timestamp,
          nonceStr : res.data.list.conf.nonceStr,
          signature : res.data.list.conf.signature
        }
        var title = obj.title || "";
        var link = obj.link || '';
        var desc = obj.desc || "";
        var imgUrl = obj.imgUrl || "";
        var wxdata = data;
        wxdata.debug = false;
        wxdata.jsApiList= [
          'onMenuShareTimeline',//分享到朋友圈
          'onMenuShareAppMessage',//分享给朋友
          'onMenuShareQQ',//分享到QQ
          'onMenuShareQZone',//分享到QQ空间
          'onMenuShareWeibo'//分享到腾讯微博
        ];
        Vue.wechat.config(wxdata);
        Vue.wechat.ready(function () {
          //分享到朋友圈
          Vue.wechat.onMenuShareTimeline({
              title:title, // 分享标题
              desc: desc, // 分享描述              
              link: link, // 分享链接
              imgUrl:imgUrl, // 分享图标
              success: function () {
                  callback && callback();
                  // 用户确认分享后执行的回调函数
              },
              cancel: function () {
                  // 用户取消分享后执行的回调函数
              }
          });
          //分享到朋友
          Vue.wechat.onMenuShareAppMessage({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接
              imgUrl: imgUrl, // 分享图标
              type: '', // 分享类型,music、video或link，不填默认为link
              dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
              success: function () {
                  // 用户确认分享后执行的回调函数
                  callback && callback();
              },
              cancel: function () {
                  // 用户取消分享后执行的回调函数
              }
          });
          //分享到QQ
          Vue.wechat.onMenuShareQQ({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接
              imgUrl: imgUrl, // 分享图标
              success: function () {
                  // 用户确认分享后执行的回调函数
                  callback && callback();
              },
              cancel: function () {
                  // 用户取消分享后执行的回调函数
              }
          });

          //分享到QQ空间
          Vue.wechat.onMenuShareQZone({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接
              imgUrl: imgUrl, // 分享图标
              success: function () {
                  // 用户确认分享后执行的回调函数
                  callback && callback();
              },
              cancel: function () {
                  // 用户取消分享后执行的回调函数
              }
          });

          //分享到腾讯微博
          Vue.wechat.onMenuShareWeibo({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接
              imgUrl: imgUrl, // 分享图标
              success: function () {
                  // 用户确认分享后执行的回调函数
                  callback && callback();
              },
              cancel: function () {
                  // 用户取消分享后执行的回调函数
              }
          });
        })
      })
      .catch(error => {
       alert(16+error);
      });
}
//url转换
function directRightUrl() {
  var href = window.location.href;
  var protocol = window.location.protocol;
  var host = window.location.host;
  var search = window.location.search;
  var hash = window.location.hash;
  var pathname = '/dist/' ;
  search = search || '?';
  hash = hash || '#/';
  var newHref = protocol + "//" + host +pathname  + hash;
  if (newHref !== href) {
    window.location.replace(newHref);
  }
}

// 价格浮点运算 减法
function accSub(arg1,arg2){
	var r1,r2,m,n;
	try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
	try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
	m=Math.pow(10,Math.max(r1,r2));
	//last modify by deeka
	//动态控制精度长度
  n=(r1>=r2)?r1:r2;
	return ((arg1*m-arg2*m)/m).toFixed(n) <= 0.00 ? 0.00 : ((arg1*m-arg2*m)/m).toFixed(n);
}
// 价格浮点运算 加法
function accAdd(arg1,arg2){
	var r1,r2,m;
	try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
	try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
	m=Math.pow(10,Math.max(r1,r2))
	return (arg1*m+arg2*m)/m
}
//确认订单页面清楚优惠券所需存储的数据
function clearConfirmCoupon(){
  window.sessionStorage.removeItem('couponList');
  window.sessionStorage.removeItem('couponId');
  window.sessionStorage.removeItem('orignCouponId');
  window.sessionStorage.removeItem('couponPrice');
  window.sessionStorage.removeItem('proCouponArr');
}

export default
{
  //接口路径
  jscHttpUrl,
  //获取项目ID
  GetSessProjectID,
  //储存用户token
  SetSessUserTo,
  //获取用户token
  GetSessUserTo,
  GetString,
  getParameter,
  setDocumentTitle,
  GetVisitData,
  solveVisitData,
  //md5加密
  getmd5,
  //获取年月日
  getNowFormatDate,
  //判断用户是否在微信中打开
  isWeiXin,
  //微信分享
  wxShare,
  directRightUrl,
  //清楚token
  clearLocal,
  //减法
  accSub,
  //加法
  accAdd,
  //确认订单页面清楚优惠券所需存储的数据
  clearConfirmCoupon,
  //初始化接口
  start(strParameter) {
    return HttpRequest("get","/start", strParameter);
  },
  //产品分类
  goodsCategory(strParameter) {
    return HttpRequest("get","/goods/category", strParameter);
  },
  //产品列表
  goodsIndex(strParameter) {
    return HttpRequest("get","/goods/index", strParameter);
  },
  //产品详情
  goodsItem(strParameter) {
    return HttpRequest("get","/store/goods/item", strParameter);
  },
  //store产品详情
  storeGoodsItem(strParameter) {
    return HttpRequest("get","/store/goods/item", strParameter);
  },
  //产品富文本 产品详情页
  goodsContent(strParameter) {
    return HttpRequest("get","/goods/content", strParameter);
  },
  //评论列表
  goodsCommentIndex(strParameter) {
    return HttpRequest("get","/store/goods/comment/list", strParameter);
  },
  //用户绑定手机号
  smsVerify(strParameter) {
    return HttpRequest("post","/sms_verify", strParameter);
  },
  //用户登录
  login(strParameter) {
    return HttpRequest("post","/login", strParameter);
  },
  //确认订
  orderConfirm(strParameter) {
    return HttpRequest("get","/order/confirm", strParameter);
  },
  //确认订单 新的
  newOrderConfirm(strParameter) {
    return HttpRequest("get","/new/order/confirm", strParameter);
  },
  //收货地址列表
  addressIndex(strParameter) {
    return HttpRequest("get","/address/index", strParameter);
  },
  //获取省市区
  indexRegions(strParameter) {
    return HttpRequest("get","/index/regions", strParameter);
  },
  //新增收货地址，编辑收货地址+
  addressAddressAdd(strParameter) {
    return HttpRequest("post","/address/address_add", strParameter);
  },
  //设为默认收货地址
  addressDefaultAddress(strParameter) {
    return HttpRequest("post","/address/default_address", strParameter);
  },
  //删除收货地址
  addressAddressDel(strParameter) {
    return HttpRequest("post","/address/address_del", strParameter);
  },
  //查看收货地址详情
  addressAddressAddDetail(strParameter) {
    return HttpRequest("get","/address/address_add", strParameter);
  },
  //获取支付方式 确认订单页面
  getorderPayType(strParameter) {
    return HttpRequest("get","/order/pay", strParameter);
  },
  //订单立即购买 生成订单
  orderSubmit(strParameter) {
    return HttpRequest("get","/order/submit", strParameter);
  },
  //领取优惠券
  couponReceive(strParameter) {
    return HttpRequest("post","/coupon/receive", strParameter);
  },
  getCoupon(strParameter){
    return HttpRequest("post","/store/goods/receive", strParameter);
  },
  //订单支付
  orderPay(strParameter) {
    return HttpRequest("post","/order/pay", strParameter);
  },
  //订单详情
  orderItem(strParameter) {
    return HttpRequest("get","/order/item", strParameter);
  },
  //获取购物车列表
  getCartList(strParameter) {
    return HttpRequest("get","/cart/index", strParameter);
  },
  //加入购物车或修改购物车数量
  addCart(strParameter) {
    return HttpRequest("POST","/cart/write", strParameter);
  },
  //订单列表
  orderIndex(strParameter) {
    return HttpRequest("get","/order/index", strParameter);
  },
  //删除购物车商品
  delectCart(strParameter) {
    return HttpRequest("post","/cart/delete", strParameter);
  },
  //未付款订单获取支付方式 订单列表
  orderPending_pay(strParameter) {
    return HttpRequest("get","/order/pending_pay", strParameter);
  },
  //未付款订单支付 订单列表
  orderPayPending_pay(strParameter) {
    return HttpRequest("post","/order/pending_pay", strParameter);
  },
  //提醒商家发货
  orderRemind(strParameter) {
    return HttpRequest("post","/order/remind", strParameter);
  },
  //删除订单
  orderDelete(strParameter) {
    return HttpRequest("post","/order/delete", strParameter);
  },
  //订单确认收货
  orderReceive(strParameter) {
    return HttpRequest("post","/order/receive", strParameter);
  },
  //查看物流
  orderLogistics(strParameter) {
    return HttpRequest("get","/order/logistics", strParameter);
  },

  //webview
  storeProduct(strParameter){
    return HttpRequest("get","/store/distribution/index", strParameter);
  },
  recordList(strParameter){
    return HttpRequest("get","/store/distribution/record", strParameter);
  },
  rankList(strParameter){
    return HttpRequest("get","/store/distribution/ranking", strParameter);
  },
  awardItem(strParameter){//奖励详情
    return HttpRequest("get","/store/distribution/award_item", strParameter);
  },
  awardDraw(strParameter){//奖励详情
    return HttpRequest("post","/store/distribution/award_draw", strParameter);
  },
  mineQrcode(strParameter){ //下载二维码页面
    return HttpRequest("get","/mine/qrcode", strParameter);
  },
  mineAboutUs(strParameter){//关于我们
    return HttpRequest("get","/mine/about_us", strParameter);
  },

  //首页
  storeIndex(strParameter){
    return HttpRequest("get","/store/index", strParameter);
  },
  //我的主页
  mineIndex(strParameter){
    return HttpRequest("get","/mine/index", strParameter);
  },

  companysIntroduction(strParameter){//企业详情
    return HttpRequest("get","/companys/introduction", strParameter);
  },

  //本店精选
  storeMineGoods(strParameter){//企业详情
    return HttpRequest("get","/store/mine/goods", strParameter);
  },
  //隐私政策
  privacyPolicy(strParameter){//企业详情
    return HttpRequest("get","/privacy_policy", strParameter);
  },
  //用户协议
  registerAgreement(strParameter){//企业详情
    return HttpRequest("get","/register_agreement", strParameter);
  },
  //企业入驻协议
  companyEnter(strParameter){//企业详情
    return HttpRequest("get","/company_enter", strParameter);
  },
  //app下载
  startDownload(strParameter){//企业详情
    return HttpRequest("get","/start/download", strParameter);
  },

  //微信授权
  wxAuth(strParameter){//企业详情
    return HttpRequest("get","/wx_auth", strParameter);
  },
  //微信支付
  payTtriggerWechatPay(strParameter){//企业详情
    return HttpRequest("get","/pay/triggerWechatPay", strParameter);
  },

  //体现帮助
  commissionWithdraw(strParameter){//企业详情
    return HttpRequest("get","/commission/withdraw", strParameter);
  },
  //资讯详情
  newsItem(strParameter){//企业详情
    return HttpRequest("get","/news/item", strParameter);
  },

  //粉丝规则
  startFansRule(strParameter){
    return HttpRequest("get","/start/fans_rule", strParameter);
  },
  //升级店主规则
  startUpgradeRules(strParameter){
    return HttpRequest("get","/start/upgrade_rules", strParameter);
  },
  //邀请开店规则
  startInvitetoStoreRules(strParameter){
    return HttpRequest("get","/start/invite_to_store_rules", strParameter);
  },
  //邀请开店规则
  labelIndex(strParameter){
    return HttpRequest("get","/label/index", strParameter);
  },
  //ceo推荐
  ceoRecommed(strParameter){
    return HttpRequest("get","/label/ceo_list", strParameter);
  },
  //限时秒杀
  timeLimit(strParameter){
    return HttpRequest("get",'/seckill/seckill/index',strParameter);
  },
  //限时秒杀提醒
  seckillRemind(strParameter){
   return HttpRequest("Post",'/seckill/remind',strParameter) 
  },
  //限时秒杀规则
  seckillRule(strParameter){
    return HttpRequest("get",'/seckill/rule',strParameter)
  },
  //限时秒杀按钮
  seckillBtn(strParameter){
    return HttpRequest("get",'/seckill/type',strParameter)
  },
  //发票保存
  invoiceStore(strParameter){
    return HttpRequest("post",'/invoice/store',strParameter)
  },
  //查看发票信息
  invoiceItem(strParameter){
    return HttpRequest("get",'/invoice/item',strParameter)
  },
  //首页导航
  indexNavigation(strParameter){
    return HttpRequest("get",'/store/navigation',strParameter)
  },
  // 双11 活动页面
  entranceIndex(strParameter){
    return HttpRequest("get",'/entrance/index',strParameter)
  },
  // 买一送一富文本
  paratext(strParameter){
   return HttpRequest("get",'/nav/index',strParameter)
  },
  //请求上级信息显示在网页顶部
  getUserInfo(strParameter){
    return HttpRequest("get",'/start/user_store_info',strParameter)
  },
  //拼团活动商品列表
  getGrouplist(strParameter){
    return HttpRequest("get",'/group/index',strParameter)
  },
  //商品详情优惠券列表
  getDetailCoupon(strParameter){
    return HttpRequest("get",'/store/goods/coupon',strParameter)
  },
  //我的优惠券列表
  getMineCoupon(strParameter){
    return HttpRequest("get",'/store/mine/coupon',strParameter)
  },
  //获取买享送商品详情
  getContent(strParameter){
    return HttpRequest("get",'/share/give/content',strParameter)
  },
  //获取上家信息
  getParentInfo(strParameter){
    return HttpRequest("get",'/start/user_store_info',strParameter)
  }
}





























