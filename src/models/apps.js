import API from "@/services/api";
import Utils from "@/utils/utils";

const initState = {
  allCoupon: [],
  userInfo: {},
  loginData: {}
};

export default {
  namespace: "apps",
  state: initState,
  effects: {
    *listCoupon({ payload = {}, callback }, { put }) {
      let result = yield API.listCoupon(payload);
      if (Utils.isSuccess(result)) {
        yield put({ type: "fillAllCoupon", payload: result.data });
        if (callback) callback(result);
      }
    }
  },
  reducers: {
    ["fillAllCoupon"](state, { payload }) {
      return {
        ...state,
        allCoupon: payload
      };
    },
    ["userInfo"](state, { payload }) {
      return {
        ...state,
        userInfo: payload
      };
    },
    ["loginData"](state, { payload }) {
      return {
        ...state,
        loginData: payload
      };
    }
  }
  // subscriptions: {
  //   setup({dispatch, history}, done) {
  //     return history.listen(({pathname, search}) => {
  //       const query = qs.parse(search);
  //       switch (pathname) {
  //         default: {
  //           console.log(pathname);
  //         }
  //       }
  //     });
  //   },
  // },
};
