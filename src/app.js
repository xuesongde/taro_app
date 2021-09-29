import React, { Component } from "react";
import { Provider } from "react-redux";
import Taro from "@tarojs/taro";
import Pages from "@/utils/pages";
import dva from "@/utils/dva";
import models from "@/models";
import Utils from "@/utils/utils";
import Events from "@/utils/events";
import { Keys, setStorageSync, getStorageSync } from "@/utils/storage";
import API from "@/services/api";

import "./theme.global.scss";
import "./app.less";

const dvaApp = dva.createApp({
  models: models
});

const store = dvaApp.getStore();
class App extends Component {
  constructor() {
    super(...arguments);
    let app = Taro.Current.app;
    console.log(store);
  }

  componentWillMount() {
    this.loadUserInfo();
  }
  userInfoReadyCallback = loginRes => {
    console.log("loginRes....", loginRes);
  };
  appGetAppUserInfo = () => {
    // 必须是在用户已经授权的情况下调用
    Taro.getUserInfo({
      success: function(res) {
        console.log("getUserInfo....", res);
        store.dispatch({
          type: "apps/userInfo",
          payload: { ...res }
        });
        const storeState = store.getState();
        console.log("storeState...", storeState);
      },
      fail: failRes => {
        console.log("failRes....", failRes);
      },
      complete: completeRes => {
        console.log("completeRes....", completeRes);
      }
    });
  };
  appLogin = () => {
    Taro.login({
      success: function(res) {
        console.log("login success....", res);
        store.dispatch({
          type: "apps/loginData",
          payload: { ...res }
        });
        const storeState = store.getState();
        console.log("storeState...", storeState);
      },
      fail: failRes => {
        console.log("login fail....", failRes);
      },
      complete: completeRes => {
        console.log("login complete....", completeRes);
      }
    });
  };
  getWeappInfo = () => {
    Taro.getSetting({}).then(res => {
      console.log("getSetting....", res);
      // 已经授权，可以直接调用 获取头像昵称，不会弹框
      if (res.authSetting["scope.userInfo"]) {
        this.appLogin();
        this.appGetAppUserInfo();
      } else {
        // 授权用户获取用户信息
        Taro.authorize({
          scope: "scope.userInfo",
          success: function() {
            // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
            this.appGetAppUserInfo();
          }
        });
      }
    });
  };
  webInit = () => {};
  // 获取用户信息
  loadUserInfo() {
    const taroEnv = Taro.getEnv();
    console.log("environment...", Taro.getEnv());
    // taroEnv == "WEAPP" &&
    switch (taroEnv) {
      case "WEAPP":
        this.getWeappInfo();
        break;
      case "WEB":
        this.webInit();
        break;
    }
  }

  render() {
    return <Provider store={store}> {this.props.children} </Provider>;
  }
}

export default App;
