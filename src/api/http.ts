import { useMemberStore } from "../stores";

const baseURL = "http://127.0.0.1:3001";
//拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    //请求超时
    options.timeout = 1000;
    //小程序请求头标识
    options.header = {
      ...options.header,
      "source-client": "miniapp",
    };
    //添加token请求头标识
    const memberStore = useMemberStore();
    const token = memberStore.profile?.token;
    if (token) {
      options.header.Authorization = token;
    }
  },
};

uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("uploadFile", httpInterceptor);

interface Data<T> {
  status: string;
  msg: string;
  results: T;
}

//请求函数
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      //请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>);
        } else if (res.statusCode === 401) {
          //401错误，清理用户信息，跳转至登录页
          const memberStore = useMemberStore();
          memberStore.clearProfile();
          uni.navigateTo({ url: "/pages/login/login" });
          reject(res);
        } else {
          //其他错误
          uni.showToast({
            icon: "none",
            title: (res.data as Data<T>).msg || "请求错误",
          });
        }
      },
      //响应失败
      fail(err) {
        uni.showToast({
          icon: "none",
          title: "网络错误，请检查网络连接",
        });
      },
    });
  });
};
