export default {
  pages: [
    "pages/index/index",
    // 通用组件
    "pages/common/apply/index",
    "pages/common/user/index",
    "pages/common/user/detail/index"
  ],
  subpackages: [],
  window: {
    navigationStyle: "custom",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: "#6e6d6b",
    selectedColor: "#e64340",
    borderStyle: "white",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/invitation_normal.png",
        selectedIconPath: "assets/invitation_active.png",
        text: "首页"
      },
      {
        pagePath: "pages/common/apply/index",
        iconPath: "assets/invitation_normal.png",
        selectedIconPath: "assets/invitation_active.png",
        text: "申请"
      },
      {
        pagePath: "pages/common/user/index",
        iconPath: "assets/invitation_normal.png",
        selectedIconPath: "assets/invitation_active.png",
        text: "用户"
      },
      {
        pagePath: "pages/common/user/detail/index",
        iconPath: "assets/invitation_normal.png",
        selectedIconPath: "assets/invitation_active.png",
        text: "用户详情"
      }
    ]
  }
};
