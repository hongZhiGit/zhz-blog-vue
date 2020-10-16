<template>
  <div>
    <div class="d-flex flex-row-reverse">
      <v-btn class="ma-6" color="success" @click="add"
        ><v-icon>mdi-plus</v-icon>新增</v-btn
      >
    </div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      :options.sync="options"
      :loading="loading"
      :server-items-length="dessertsTotal"
    >
      <template v-slot:item.introduction="{ item }">
        {{ getIntroduction(item.introduction) }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '标题', align: 'start', value: 'title' },
        {
          text: '简介',
          align: 'start',
          value: 'introduction',
        },
        { text: '创建时间', value: 'createdAt' },
        { text: '标签', value: 'tagTexts' },
        { text: '字数', value: 'wordCount' },
        { text: '点赞数', value: 'likes' },
        { text: '浏览数', value: 'viewCount' },
        { text: '操作', value: 'actions', sortable: false },
      ],
      dessertsTotal: 0,
      desserts: [
        {
          title: 'Flex 布局',
          introduction: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
          createdAt: '2020-08-10',
          tagTexts: '前端、布局、css',
          wordCount: '685',
          likes: '1000',
          viewCount: '2000'
        },
        {
          title: 'Flex 布局',
          introduction: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
          createdAt: '2020-08-10',
          tagTexts: '前端、布局、css',
          wordCount: '685',
          likes: '1000',
          viewCount: '2000'
        }
      ],
      loading: false,
      options: {
        page: 1,
        itemsPerPage: 5
      }
    };
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.pageInit();
    }, 500);
  },
  methods: {
    pageInit() {
      this.desserts = [
        {
          title: 'Flex 布局',
          introduction: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
          createdAt: '2020-08-10',
          tagTexts: '前端、布局、css',
          wordCount: '685',
          likes: '1000',
          viewCount: '2000'
        },
        {
          title: 'Flex 布局',
          introduction: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
          createdAt: '2020-08-10',
          tagTexts: '前端、布局、css',
          wordCount: '685',
          likes: '1000',
          viewCount: '2000'
        }
      ];
      this.dessertsTotal = 2;
      this.loading = false;
    },
    add() {
      this.$router.push('./save');
    },
    editItem(item) {
      this.$router.push(`./save?id=${item.id}`);
    },
    deleteItem(item) {

    },
    // 简介只需要显示30个字符就好了
    getIntroduction(text) {
      const len = 40;
      if (text.length > len) {
        text = text.substr(0, len);
        text += '...';
      }
      return text;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>