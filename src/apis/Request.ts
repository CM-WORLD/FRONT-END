import axios, { AxiosResponse } from "axios";
import qs from 'qs'

function convertToQueryString(searchParams: Object) {
  // 검색 조건이 빈 객체일 경우 빈 문자열 반환
  if (Object.keys(searchParams).length === 0) {
    return "";
  }

  // key-value 쌍을 배열로 매핑하고 URL 쿼리 문자열로 조합
  const queryString = Object.entries(searchParams)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return `?${queryString}`;
}

export const RequestGet = async (
  url: string,
  paramObj?: any
): Promise<AxiosResponse> => {
  let paramStr = "";
  if (paramObj) paramStr = convertToQueryString(paramObj);
  try {
    const response: AxiosResponse = await axios.get(
      "http://localhost:8080" + url + paramStr
    );
    return response;
  } catch (error) {
    throw error; // 오류를 다시 throw하여 상위 레벨에서 처리할 수 있도록 함
  }
};

export const HOST_URL = "http://localhost:8080";

export default axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};