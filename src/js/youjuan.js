import Vue from "vue";


var projectID = 1;


//判断用户是否在微信中打开
function isWeiXin () {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('micromessenger') != -1) {
    return true;
  } else {
    return false;
  }
}

//储存用户projectID
function SetSessProjectID () {
  if (isWeiXin() == true) {
    var strValue = window.localStorage.getItem('hdProject_ID');
    if (strValue != projrctID) {
      window.localStorage.setItem('hdProject_ID',projectID);
    }
  } else {
    var strValue = window.sessionStorage.getItem('hdProject_ID');
    if (strValue != projectID) {
      window.sessionStorage.setItem('hdProject_ID',projectID);
    }
  }
}

//获取用户projectID
function GetSessProject () {
  if (isWeiXin() == true) {
    var strValue = window.localStorage.getItem('hdProject_ID');
    if (strValue == "" || strValue == null || strValue == undefined) {
      SetSessProjectID(projectID);
    } else {
      strValue = strValue;
    }
  } else {
    var strValue = window.sessionStorage.getItem.('hdProject_ID');
    if (strValue == "" || strValue == null || strValue == undefined) {
      SetSessProjectID(projectID);
    } else {
      strValue = strValue;
    }
  }
}


//储存用户token
function SetSessUserTo () {
  if (isWeiXin() == true) {
    window.localStorage.setItem('hdUserTo',strValue);
  } else {
    window.sessionStorage.setItem('hdUserTo',strValue);
  }
}


//判断参数是否为 ""
function GetString (objValue) {
  if (objValue + "$" == "$" || objValue + "$" =="null$" || objValue + "$" == "undefined$") {
    return "";
  } else {
    return new String(objValue);
  }
}


//获取用户token
function GetSessUserTo () {
  if (isWeiXin() == true){
    var strValue = window.localStorage.getItem('hdUserTo') || $router.history.current.query["token"];
    if (GetString(strValue) == "") {
      strValue = '';
    } else {
      strValue = strValue;
    }
  } else {
    var strValue = window.sessionStorage.getItem('hdUserTo') || $router.history.current.query["token"];
    if (GetString(strValue) == "") {
      strValue = "";
    } else {
      strValue = strValue;
    }
  }
  return strValue;
}

//清除缓存
function clearLocal () {
  localStorage.removeItem('hdUserTo');
  sessionStorage.removeItem('hdUserTo');
  alert("清除缓存成功")
}



//rsa加密
function GetVisitData (strParameter) {
  let jse = new JSEncrypt();
  jse.setPublicKey("公匙");
  var encryptData = jse.encrypt(strParameter);
  return encryptData
}

//rsa解密
function solveVisitData(strParameter) {
  let jse = new JSEncrypt();
  var aaa = 'as123456'
  jse.setPrivateKey("私匙")
  var encryptData = jse.encrypt(aaa);
  jse.setPublicKey("公匙")
  let decrypted = jse.decrypt(encryptData)
  return encryptData
}




export function HttpRequest (type, strMethod, strParameter, hideLoad) { //不需要loading动画的接口hideLoad == true
  return new Promise((resolve,reject) => {
    !hideLoad&&store.commit("showLoad",1)
    if (type == 'get') {
      let strArrParam         = JSON.parse(strParameter)
          strArrParam.webpage = "";
      console.log(11, strParameter)
      strArrParam = GetVisitData(JSON.stringify(strArrParam))
      console.log(strArrParam)
      axios.get(jscHttpUrl + strMethod, { params : {
        params: strArrParam
      }})
        .then(response => {
          !hideLoad&&store.commit("showLoad", -1)
          if (response.data.hint == '请先登录') {
            store.commit("loginGet")
          } else if (response.data.code == '40004') {
            $router.push({path: '/login'})
          } else {
            resolve(response);
          }
        })
        .catch((error) => {
          !hideLoad&&store.commit("showLoad",-1)
          reject(error)
        })
    } else {
      let strArrParam         = qs.parse(strParameter)
          strArrParam.webpage = ""
      console.log(12, strParameter)
      strArrParam = GetVisitData(JSON.stringify(strArrParam))
      console.log(strArrParam)
      axios.post(jscHttpUrl + strMethod ,{
        params: strArrParam,
      })
      .then(response => {
        !hideLoad&&store.commit("showLoad",-1)
        if (response.data.hint == '请先登录') {
          store.commit("loginPost")
        } else if (response.data.code == '40004') {
          $router.push({path: '/login'})
        } else{
          resolve(response);
        }
      })
      .catch((error) => {
        !hideLoad&&store.commit("showLoad", -1)
        reject(error)
      })
    }
  })
}


//截取页面参数
function getParameter (pName) {
  return {}
}




//微信title
var setDocumentTitle = function (title) {
  $router.history.current.meta.title = title;
};

//md5加密
function getmd5 (strValue) {
  var str;
  var md5 = cryto.createHash("md5");
  md5.update(strValue);
  var str = md5.digest('hex');
  return str;
}

//获取当前年月日分秒 格式 YYMMDDHHMMSS
function getNowFormatDate () {
  var date       = new Date();
  var seperator1 = "-"
  var seperator2 = ":"
  var month      = data.getMonth() + 1;
  var strDate    = data.getDate();
  var hour       = date.getHours();
  var minute     = date.getMinutes();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >=0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (hour >= 1 && hour <= 9) {
    hour = "0" + hour;
  }
  if (minute >= 1 && minute <= 9) {
    minute = "0" +minute;
  }
  var currentdate = date.getFullYear() + month + strDate + hour + minute;
  return currentdate;
}


//微信分享
function wxShare (obj, url, callback) {
  var arrParameter = JSON.stringify({
    project_id: 1,
    web_url   : url
  });
  HttpRequest("get", "/share/conf/get", arrParameter, true)
    .then(res => {
      var data = {
        appID    : res.data.list.conf.appID,
        timestamp: res.data.list.conf.timestamp,
        nonceStr : res.data.list.conf.nonceStr,
        signature: res.data.list.conf.signature
      }
      var title            = obj.title || "";
      var link             = obj.link || "";
      var desc             = obj.desc || "";
      var imgUrl           = obj.imgUrl || "";
      var wxdata           = data;
          wxdata.debug     = false;
          wxdata.jsApiList = [
        'onMenuShareTimeLine', //分享到朋友圈
        'onMenuShareAppMessage', //分享给盆友
        'onMenuShareQQ', //分享到QQ
        'onMeunShareQzone', //分享到QQ空间
        'onMeunShareWeibo' //分享到到腾讯微博
      ];
      Vue.wechat.config(wxdata);
      Vue.wechat.ready(function () {
        //分享到朋友圈
        Vue.wechat.onMenuShareTimeline({
          title  : title,         //分享标题
          desc   : desc,          //分享描述
          link   : link,          //分享链接
          imgUrl : imgUrl,        //分享图标
          success: function () {
            callback && callback(); //用户确认分享后执行的回调函数
          },
          cancel: function () {
            callback && callback(); //用户取消分享执行的回调函数
          }
        });
        //分享到朋友
        Vue.wechat.onMenuShareAppMessage({
          title  : title,         //分享标题
          desc   : desc,          //分享描述
          link   : link,          //分享链接
          imgUrl : imgUrl,        //分享图标
          type   : '',            //分享类型 music、viedo、link、默认为link
          dataUrl: '',            //如果data是music或video ,则要提供数据链接 ，默认为空
          success: function () {
            callback && callback(); //用户确认分享后执行的回调函数
          },
          cancel: function () {
            callback && callback(); //用户取消分享执行的回调函数
          }
        });
        //分享到QQ
        Vue.wechat.onMenuShareQQ({
          title  : title,         //分享标题
          desc   : desc,          //分享描述
          link   : link,          //分享链接
          imgUrl : imgUrl,        //分享图标
          success: function () {
            callback && callback(); //用户确认分享后执行的回调函数
          },
          cancel: function () {
            callback && callback(); //用户取消分享执行的回调函数
          }
        });
        //分享到QQ空间
        Vue.wechat.onMenuShareQZone({
          title  : title,         //分享标题
          desc   : desc,          //分享描述
          link   : link,          //分享链接
          imgUrl : imgUrl,        //分享图标
          success: function () {
            callback && callback(); //用户确认分享后执行的回调函数
          },
          cancel: function () {
            callback && callback(); //用户取消分享执行的回调函数
          }
        });
        //分享到朋友圈
        Vue.wechat.onMenuShareWeibo({
          title  : title,         //分享标题
          desc   : desc,          //分享描述
          link   : link,          //分享链接
          imgUrl : imgUrl,        //分享图标
          success: function () {
            callback && callback(); //用户确认分享后执行的回调函数
          },
          cancel: function () {
            callback && callback(); //用户取消分享执行的回调函数
          }
        });
      })
    })
    .catch(error => {
      alert(16+error)
    });
}

//url转换
function directRightUrl () {
  var href = window.location.href;
}