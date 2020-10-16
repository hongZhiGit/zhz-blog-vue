<template>
  <div>
    <!-- 首页背景 -->
    <banner-back ref="bannerBackRef" :backSrc="backSrc" downArrow></banner-back>
    <!-- 内容 -->
    <div class="main-box" :style="$store.getters.mainStyle">
      <div class="item" v-for="(item, index) in dataArr" :key="index">
        <v-img class="image" :src="item.img"></v-img>
        <div class="right-context">
          <div class="title-name" @click="goDetail(item)">{{ item.title }}</div>
          <div class="context" @click="goDetail(item)">{{ item.context }}</div>
          <div class="flex-base item-footer">
            <!-- 创建时间 -->
            <v-icon class="icon">mdi-calendar-month-outline</v-icon>
            {{ item.createdAt }}
            <!-- 标签 -->
            <span class="flex-base tag">
              <v-icon class="icon">mdi-tag-text-outline</v-icon>
              <span
                class="tag-item"
                v-for="(tagItem, index) in item.tagArr"
                :key="index"
              >
                <span>{{ tagItem.text }}</span>
              </span>
            </span>
            <!-- 文字数 -->
            <v-icon class="icon">mdi-text-box-outline</v-icon>
            {{ item.wordCount }}字
          </div>
        </div>
      </div>
      <div style="height: 100px"></div>
      <div class="flex-center pagination">
        <v-pagination
          v-model="page"
          :length="16"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          color="no-repeat"
          dark
        ></v-pagination>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import bannerBack from "../../components/banner-back";
import myFooter from "../../components/my-footer";

export default {
  components: {
    bannerBack,
    myFooter
  },
  data() {
    return {
      title: ``,
      dataArr: [],
      page: 1,
      backSrc: 'https://rmt.dogedoge.com/fetch/fluid/storage/bg/vdysjx.png?w=1920&fmt=webp'
    };
  },
  created() {
    window.scrollTo(0, 0);
    console.log(1);
    this.pageInit();
  },
  mounted() {
  },
  methods: {
    pageInit() {
      this.$nextTick(() => {
        this.$refs.bannerBackRef.setFont(`这是一个火爆全球的blog`);
        this.dataArr = [
          {
            title: 'Flex 布局',
            img: 'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png',
            context: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
            createdAt: '2020-08-10',
            tagArr: [{ code: 10, text: '前端' }, { code: 20, text: '布局' }, { code: 30, text: 'css' }],
            wordCount: 376
          },
          {
            title: 'Flex 布局',
            img: 'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png',
            context: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
            createdAt: '2020-08-10',
            tagArr: [{ code: 10, text: '前端' }, { code: 20, text: '布局' }, { code: 30, text: 'css' }],
            wordCount: 376
          },
          {
            title: 'Flex 布局',
            img: 'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png',
            context: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
            createdAt: '2020-08-10',
            tagArr: [{ code: 10, text: '前端' }, { code: 20, text: '布局' }, { code: 30, text: 'css' }],
            wordCount: 376
          },
          {
            title: 'Flex 布局',
            img: 'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png',
            context: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
            createdAt: '2020-08-10',
            tagArr: [{ code: 10, text: '前端' }, { code: 20, text: '布局' }, { code: 30, text: 'css' }],
            wordCount: 376
          },
          {
            title: 'Flex 布局',
            img: 'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png',
            context: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
            createdAt: '2020-08-10',
            tagArr: [{ code: 10, text: '前端' }, { code: 20, text: '布局' }, { code: 30, text: 'css' }],
            wordCount: 376
          },
          {
            title: 'Flex 布局',
            img: 'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png',
            context: '采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。',
            createdAt: '2020-08-10',
            tagArr: [{ code: 10, text: '前端' }, { code: 20, text: '布局' }, { code: 30, text: 'css' }],
            wordCount: 376
          }
        ];
      });
    },
    goDetail(item) {
      this.$router.push(`article-detail?id=${item.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 80%;
  .image {
    height: 160px;
    width: 268px;
  }
  .right-context {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
  }
  .title-name {
    @include hover-link;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    white-space: nowrap;
    color: #c4c6c9;
  }
  .context {
    @include hover-link;
    color: #c4c6c9;
    min-height: 60px;
    margin-top: 16px;
  }
  .item-footer {
    color: #c4c6c9;
    margin-top: 16px;
    font-size: 16px;
    .icon {
      color: #c4c6c9;
      margin: 0 4px;
    }
    .tag {
      margin: 0 10px;
    }
    .tag-item {
      margin-left: 3px;
    }
  }
}

@media screen and (max-width: 567px) {
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    height: 600px;
    background: rgb(38, 45, 55);
    z-index: 1100;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    .item {
      margin-top: 40px;
      background: #aaaaaa;
      // height: 100px;
      width: 85%;
      .image {
        height: 160px;
        width: 100%;
      }
      .title-name {
        margin-top: 10px;
        font-size: 24px;
        word-break: break-word;
        color: #c4c6c9;
        font-weight: 500;
      }
      .context {
        margin-top: 6px;
        font-size: 16px;
        word-break: break-word;
        color: #c4c6c9;
        font-weight: 400;
      }
      .item-footer {
        margin-top: 6px;
        display: flex;
        font-size: 16px;
        color: #c4c6c9;
      }
      .icon {
        font-size: 16px;
        color: #c4c6c9;
        margin-right: 4px;
      }
    }
  }
}
</style>