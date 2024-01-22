import axios from "axios";
import { HOST_URL } from "./Const";

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
    success: Function,
    error: Function
  ) {
    const initAxios = axios.create({
      baseURL: HOST_URL,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        RefreshToken: this.refreshToken,
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

    if (resp.data.newAtk) {
      this.setAccessToken(`${resp.data.newAtk}`); // atk 재발급
    }

    if (resp.data.status === 200 || resp.data.status === 205) {
      if (resp.data) {
        success(resp.data);
      }
    } else {
      if (resp.data.error) {
        error(resp.data);
      }
    }

    // } else if (resp.data.status === 410 ){
    //   if (redirect) {
    //     localStorage.setItem("referer", window.location.pathname);
    //     alert("로그인이 필요합니다.");
    //     window.location.href = "/sign/in";
    //   }
    // } else {
    //   //400일 경우 어쩔건데 (errorcallback을 해야지, error callback 넣을 자리와 로그인 만료는 엄연히 구별할 것.)
    //   if (resp.data.error) {
    //     errorCallback(resp.data);
    //   }
    // }
  }

  public get(url: string, params: {}, success: Function, error: Function) {
    return this.request("GET", url, params, success, error);
  }

  public post(url: string, params: {}, success: Function, error: Function) {
    return this.request("POST", url, params, success, error);
  }
}
