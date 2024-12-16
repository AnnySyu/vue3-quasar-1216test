<template>
  <div>
    <q-drawer v-if="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="router-link" :to="{ name: 'home' }">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>首頁</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="router-link" :to="{ name: 'product-list' }">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>產品列表</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="router-link" :to="{ name: 'create-product' }">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>新增產品</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="router-link" :to="{ name: 'user-info' }">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>使用者資訊</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="router-link" :to="{ name: 'api-test' }">
          <q-item-section avatar>
            <q-icon name="web" />
          </q-item-section>
          <q-item-section>
            <q-item-label>API 請求測試</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="router-link" :to="{ name: 'louis-homework' }">
          <q-item-section avatar>
            <q-icon name="menu_book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Louis回家作業</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, toRef } from "vue";
// const leftDrawerOpen = ref(false);
const props = defineProps({
  leftDrawerOpen: Boolean,
});
const leftDrawerOpen = toRef(props, "leftDrawerOpen");
</script>
