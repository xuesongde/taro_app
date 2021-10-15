import React, { Component } from "react";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import Events from "@/utils/events";
import { View, Text, Image } from "@tarojs/components";
import PageLayout from "@/layouts/common/PageLayout";
import SearchBar from "@/components/common/SearchBar";
import ColorTitle from "@/components/common/ColorTitle";

import styles from "./index.less";
import qs from "querystring";
import { PageKey } from "@/utils/pages";

@connect(
  ({ index, apps }) => ({
    index,
    apps
  }),
  dispatch => ({})
)
class Index extends Component {
  state = {
    title: "this is home page"
  };
  render() {
    const taroEnv = Taro.getEnv();
    const { title } = this.state;
    return (
      <>
        {taroEnv == "WEAPP" ? (
          <View className={styles.weapp}>{title}</View>
        ) : null}
        {taroEnv == "WEB" ? <View className={styles.h5}>{title}</View> : null}
      </>
    );
  }
}

export default Index;
