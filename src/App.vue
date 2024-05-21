<script setup>
import Login from "@/components/sys/login/Login.vue";
import {ConfigProvider} from 'ant-design-vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import {computed, ref} from "vue";

const locale = ref(enUS.locale);

const themeConfig = computed(() =>
    Object.assign(
        {
          token: {
            colorPrimary: '#0960bd',
            colorSuccess: '#55D187',
            colorWarning: '#EFBD47',
            colorError: '#ED6F6F',
            colorInfo: '#0960bd',
          },
        },
    ),
);
</script>

<template>

  <div style="margin-bottom: 16px">
    <span style="margin-right: 16px">Change locale of components:</span>
    <a-radio-group v-model:value="locale">
      <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
      <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
    </a-radio-group>
  </div>

  <ConfigProvider :locale="locale" :theme="themeConfig">
    <Login/>
  </ConfigProvider>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
