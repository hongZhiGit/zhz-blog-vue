<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar>
            <img src="../../static/img/avatar1.gif" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
            <v-list-item-subtitle>管理员</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="goPath(item)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <v-footer app>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: '首页', icon: 'mdi-view-dashboard', path: '/management/home' },
        { title: '文章管理', icon: 'mdi-newspaper', path: '/management/article/list' },
        { title: '标签管理', icon: 'mdi-tag', path: '/management/tag/list' },
      ]
    };
  },
  methods: {
    goPath(item) {
      this.$router.push(item.path);
    }
  },
};
</script>

<style>
</style>