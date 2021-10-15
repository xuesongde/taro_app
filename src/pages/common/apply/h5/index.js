import React, { Component } from "react";
import { connect } from "react-redux";
import PageLayout from "@/layouts/common/PageLayout";
import Pages from "@/utils/pages";
import { Button, Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import Config from "@/config";
import applyModel from "@/pages/common/apply/model";
import { AtButton, AtInput, AtToast } from "taro-ui";
import classnames from "classnames";
import { dispatchType } from "@/utils/model-utils";
import styles from "./index.less";

@connect(
  ({ apps }) => ({
    apps
  }),
  dispatch => ({
    $setUserInfo: (args = {}) => dispatch({ type: "apps/userInfo", ...args })
  })
)
class Index extends Component {
  state = {
    isShowPhone: false
  };
  // 手机号验证码登录
  loginWithAccount = () => {};
  render() {
    console.log("apply page props...", this.props);
    return (
      <View className={styles.apply_h5} onClick={this.loginWithAccount}>
        已有账号登陆/注册
      </View>
    );
  }
}

export default Index;
