class jsb {
  invokeId = 0;
  callbackMap = {};
  constructor() {}

  invoke({ scope, method, params, callback }) {
    console.log("JSB.invoke", scope, method, params);
    this.invokeId++;
    if (callback) {
      this.callbackMap[this.invokeId.toString()] = callback;
    }
   let u = navigator.userAgent;
   let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //判断是否是 android终端
    console.log('是否是Android：' + isAndroid); //true,false
      if (!isAndroid){
        window.webkit.messageHandlers.jsb.postMessage(
          JSON.stringify({
            scope: scope,
            method: method,
            params: params,
            invokeId: this.invokeId,
          })
          );
      }else {

      var msg = JSON.stringify({
                          scope: scope,
                          method: method,
                          params: params,
                          invokeId: this.invokeId,
                        });
        console.log("msg",msg);
        window.Android.action(msg);
      }
  }

  onResponse(responseBody, invokeId) {
    console.log("JSB.onResponse", responseBody, invokeId);
    const callback = this.callbackMap[invokeId.toString()];
    if (callback) {
      callback(responseBody);
        console.log("JSB.onResponse", responseBody);
      delete this.callbackMap[invokeId.toString()];
    }
  }

  // helper methods

  http({ path, method, query, body }) {
    return new Promise((resolve, reject) => {
      this.invoke({
        scope: "http",
        method,
        params: { path, query, body },
        callback: ({ responseBody, success }) => {
            console.log("responseBody ", responseBody, "success", success);
          if (success !== true) {
            reject(responseBody);
          } else {
            resolve(responseBody);
          }
        },
      });
    });
  }

  getPageParams() {
    return new Promise((resolve, reject) => {
      this.invoke({
        scope: "currentPage",
        method: "getPageParams",
        callback: ({ responseBody, success }) => {
          if (success !== true) {
            reject(responseBody);
          } else {
            resolve(responseBody);
          }
        },
      });
    });
  }

  pickImage() {
    return new Promise((resolve, reject) => {
      this.invoke({
        scope: "currentPage",
        method: "pickImage",
        callback: ({ responseBody, success }) => {
          if (success !== true) {
            reject(responseBody);
          } else {
            resolve(responseBody);
          }
        },
      });
    });
  }

  getToken() {
    return new Promise((resolve, reject) => {
      this.invoke({
        scope: "http",
        method: "getToken",
        callback: ({ responseBody, success }) => {
          if (success !== true) {
            reject(responseBody);
          } else {
            resolve(responseBody);
          }
        },
      });
    });
  }

  getLoginUserInfo() {
    return new Promise((resolve, reject) => {
      this.invoke({
        scope: "http",
        method: "getLoginUserInfo",
        callback: ({ responseBody, success }) => {
          if (success !== true) {
            reject(responseBody);
          } else {
            resolve(responseBody);
          }
        },
      });
    });
  }

  getAppVersion() {
    return new Promise((resolve, reject) => {
      this.invoke({
        scope: "app",
        method: "getAppVersion",
        callback: ({ responseBody, success }) => {
          if (success !== true) {
            reject(responseBody);
          } else {
            resolve(responseBody);
          }
        },
      });
    });
  }

  getUserDefaults(key) {
    return new Promise((resolve, reject) => {
      this.invoke({
        scope: "app",
        method: "getUserDefaults",
        params: { key },
        callback: ({ responseBody, success }) => {
          if (success !== true) {
            reject(responseBody);
          } else {
            resolve(responseBody);
          }
        },
      });
    });
  }

  setUserDefaults({ key, value }) {
    return new Promise((resolve, reject) => {
      this.invoke({
        scope: "app",
        method: "setUserDefaults",
        params: { key, value },
        callback: ({ responseBody, success }) => {
          if (success !== true) {
            reject(responseBody);
          } else {
            resolve(responseBody);
          }
        },
      });
    });
  }

  push(params) {
    this.invoke({ scope: "window", method: "push", params });
  }

  pop() {
    this.invoke({ scope: "window", method: "pop" });
  }

  /**
   * 请原生帮忙转发通知
   * @param { eventName } eventName 事件名称
   * @param { eventData } eventData 事件数据
   * @param { fromPage } fromPage 来源页面
   * @param { toPage } toPage 目标页面
   */
  forwardEvent({ eventName, eventData, fromPage, toPage }) {
    this.invoke({
      scope: "event_handler",
      method: "forwardEvent",
      params: { eventName, eventData, fromPage, toPage },
    });
  }
}

class EventBus {
  events = {};
  constructor() {}

  emit(eventName, data) {
    console.log("EventBus.emit", eventName, data);
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  }

  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }
}
(function (){
    window.__jsb = new jsb();
    window.__eventBus = new EventBus();
    window.__safeAreaInsets = "{native.safeAreaInsets}";
})()


