import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { Notify } from "quasar";

// 創建 Axios 實例
const apiClient: AxiosInstance = axios.create({
  //   baseURL: '/', // 修改為你的API URL
  timeout: 10000, // 設定請求超時
  headers: {
    "Content-Type": "application/json",
  },
});

// 定義 API 響應數據結構
interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: { code: string; message: string } | null;
}

// 響應攔截器
apiClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    // 檢查 API 是否返回成功
    if (response.data.success) {
      return response; // 返回完整的響應
    } else {
      console.error("API 錯誤:", response.data.error?.message);
      return Promise.reject(response.data.error?.message || "API Error");
    }
  },
  (error: AxiosError) => {
    console.error("全局錯誤處理:", error.message);
    return Promise.reject(error); // 傳遞錯誤給呼叫者
  }
);

const handleGlobalError = (error: any) => {
  const message = error?.message || error || "Unknown error occurred";
  Notify.create({
    type: "negative",
    message,
    position: "top",
    timeout: 3000,
  });
};

// 定義 API Service
const apiservice = {
  //  error時,會promise 錯誤回去 不會進去 Error Handler
  fetchApi: async <T>(url: string): Promise<T | null> => {
    try {
      const response = await apiClient.get<ApiResponse<T>>(url);
      return response.data.data; // 返回數據
    } catch (error) {
      console.error("fetchApi 發生錯誤:", error);
      throw error; // 重新拋出錯誤
    }
  },

  // error時,不會promise error 出去，並會成功進入 Error Handler
  fetchApiWithoutPromise: async <T>(url: string): Promise<T | null> => {
    try {
      const response = await apiClient.get<ApiResponse<T>>(url);
      console.log(response);
      if (!response.data.success) {
        console.warn(
          "fetchApiWithoutPromise 錯誤:",
          response.data.error?.message
        );
        handleGlobalError(response.data.error?.message);
        return null;
      }
      return response.data.data;
    } catch (error) {
      console.warn("fetchApiWithoutPromise 發生錯誤:", error);
      handleGlobalError(error);
      return null;
    }
  },
};

export default apiservice;
