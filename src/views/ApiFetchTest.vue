<template>
  <q-page>
    <q-btn label="不要走error handler" @click="fetchUserDataWithHandler" />
    <q-btn
      label="走Error Handler"
      @click="fetchUserDataWithoutPromiseHandler"
    />
    <div v-if="user">
      <h3>用戶姓名: {{ user.name }}</h3>
      <p>用戶電子郵件: {{ user.email }}</p>
    </div>
    <div v-else>
      <p>正在加載用戶資料...</p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import apiservice from "../utils/ApiService";

// 定義用戶資料的 TypeScript 類型
interface User {
  id: number;
  name: string;
  email: string;
}

export default defineComponent({
  setup() {
    const user = ref<User | null>(null);

    const fetchUserDataWithHandler = async () => {
      try {
        // 沒使用錯誤處理
        const data = await apiservice.fetchApi<User>("/api/user.json");
        user.value = data;
        console.log("HI");
      } catch (error) {
        console.error("帶錯誤處理的 API 請求錯誤:", error);
      }
    };

    const fetchUserDataWithoutPromiseHandler = async () => {
      // 使用背景錯誤處理
      const data = await apiservice.fetchApiWithoutPromise<User>(
        "/api/user.json"
      );
      user.value = data;
      console.log("HI");
    };

    return {
      user,
      fetchUserDataWithHandler,
      fetchUserDataWithoutPromiseHandler,
    };
  },
});
</script>
