import axios from "axios";
import { HOST_URL } from "./Const";

import Cookies from "js-cookie";

export class ApiClient {
  private static instance: ApiClient;
  private accessToken: string = localStorage.getItem("atk") || "";
  private refreshToken: string = localStorage.getItem("rtk") || "";

  constructor() {}

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  private setAccessToken(atk: string) {
    localStorage.setItem("atk", atk);
  }

  public async request(
    httpMethod: string,
    url: string,
    params: {},
    callback: Function,
    type: string,
    redirect: boolean
  ) {
    const initAxios = axios.create({
      baseURL: HOST_URL,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        RefreshToken: this.refreshToken,
        type: type,
      },
    });

    let resp = null;

    switch (httpMethod) {
      case "GET":
        resp = await initAxios.get(url, params);
        break;
      case "POST":
        resp = await initAxios.post(url, params);
        break;
      // case "PUT":
      //   resp = await initAxios.put(url, params);
      //   break;
      // case "DELETE":
      //   resp = await initAxios.delete(url, params);
      //   break;
      default:
        resp = await initAxios.get(url, params);
        break;
    }


    // const testCookie = Cookies.get("test");
    // const test2 = Cookies.get("myCookie");
    // console.log("test2", test2)
    // console.log("쿠키!!!!", testCookie); // 쿠키 'test'의 값 출력

    console.log("???", resp);

    if (resp.data.status === 200) {
      // console.log("redirect??", redirect);
      if (resp.data) callback(resp.data);
      if (resp.data.newAtk) this.setAccessToken(`${resp.data.newAccessToken}`); // atk 재발급
    } else {
      // if (redirect) {
      // localStorage.setItem("referer", window.location.pathname);
      // alert("로그인이 필요합니다.");
      // window.location.href = "/sign/in";
      // }
      // 415, 500, 505 ::login required
    }
  }

  public get(
    url: string,
    params: {},
    callback: Function,
    type: string,
    redirect: boolean = false
  ) {
    return this.request("GET", url, params, callback, type, redirect);
  }

  public post(
    url: string,
    params: {},
    callback: Function,
    type: string,
    redirect: boolean = false
  ) {
    return this.request("POST", url, params, callback, type, redirect);
  }
}
