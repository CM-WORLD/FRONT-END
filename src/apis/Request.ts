import axios, { AxiosResponse } from 'axios';

export const RequestGet = async (url: string): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.get('http://localhost:8080' + url);
        return response;
    } catch (error) {
        throw error; // 오류를 다시 throw하여 상위 레벨에서 처리할 수 있도록 함
    }
};