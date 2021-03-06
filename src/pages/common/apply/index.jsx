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
import Apply_h5 from "./h5/index.js";
import Apply_weapp from "./weapp/index.js";
class Index extends Component {
  render() {
    const taroEnv = Taro.getEnv();
    return (
      <>
        {taroEnv === "WEAPP" ? <Apply_weapp /> : null}
        {taroEnv === "WEB" ? <Apply_h5 /> : null}
      </>
    );
  }
}

export default Index;
