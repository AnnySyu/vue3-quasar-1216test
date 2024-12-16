<template>
  <q-layout view="lHh Lpr lFf">
    <cq-header
      :leftDrawerOpen="leftDrawerOpen"
      @switchMenu="switchMenu"
    ></cq-header>

    <SlideMenu :leftDrawerOpen="leftDrawerOpen"></SlideMenu>

    <q-page-container>
      <router-view></router-view>
      <span style="font-size: 50px"
        >{{ `${"isOpen :" + leftDrawerOpen}` }}
      </span>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import SlideMenu from "./views/layout/Silde-Menu.vue";
import CqHeader from "./views/layout/Cq-Header.vue";

import { ref } from "vue";
const leftDrawerOpen = ref(false);

const switchMenu = (value: string) => {
  console.log("cccccc");
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
