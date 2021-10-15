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
    isOpened: false,
    toastText: ""
  };
  // 一键登录
  onClickLoginUseWeChat = () => {
    Taro.login({
      success: res => {
        console.log(res);

        if (res.code) {
          //发起网络请求
          // Taro.request({
          //   url: "https://test.com/onLogin",
          //   data: {
          //     code: res.code
          //   }
          // });
          this.setState({
            isOpened: true,
            toastText: JSON.stringify(res, null, 2)
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  };
  // 手机号验证码登录
  loginWithAccount = () => {};
  render() {
    console.log("apply page props...", this.props);
    const {
      apps: {
        userInfo: {
          userInfo: { avatarUrl, nickName }
        }
      }
    } = this.props;
    const { isOpened, toastText } = this.state;

    return (
      <>
        <View className={styles.header}>
          <Image
            className={styles.logo}
            src={avatarUrl}
            onClick={() => Pages.goBack()}
          />
          <Text className={styles.appName}>{nickName}</Text>
        </View>
        <View className={styles.content}>
          <View className={styles.tip}>
            允许小程序获得微信授权，才能正常使用
          </View>
          <View className={styles.authority}>
            获得你的公开信息(昵称，头像等)
          </View>
        </View>
        <AtButton
          type="primary"
          loading={false}
          onClick={this.onClickLoginUseWeChat}
        >
          一键登录
        </AtButton>
        <View className={styles.toggleMode} onClick={this.loginWithAccount}>
          已有账号登陆/注册
        </View>
        <AtToast isOpened={isOpened} text={toastText}></AtToast>
      </>
    );
  }
}

export default Index;
