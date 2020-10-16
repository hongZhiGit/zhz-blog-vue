<template>
  <div>
    <form class="login-box" ref="form">
      <v-text-field
        v-model="formData.title"
        label="标题"
        required
        :error-messages="titleErrors"
        @input="$v.title.$touch()"
        @blur="$v.title.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="formData.introduction"
        label="简介"
        required
        :error-messages="introductionErrors"
        @input="$v.introduction.$touch()"
        @blur="$v.introduction.$touch()"
      ></v-text-field>
      <v-select
        v-model="formData.tags"
        :items="tagArr"
        item-text="name"
        item-value="id"
        chips
        label="标签"
        multiple
        :error-messages="tagsErrors"
        @input="$v.tags.$touch()"
        @blur="$v.tags.$touch()"
      ></v-select>
      <tinymce-editor
        v-model="formData.context"
        baseUrl="./"
        ref="editor"
      ></tinymce-editor>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import TinymceEditor from '../../../components/tinymce-editor';
export default {
  components: {
    TinymceEditor
  },
  data() {
    return {
      formData: {
        title: '',
        introduction: ''
      },
      tagArr: [
        { id: '1', name: '无情' },
        { id: '2', name: '奥利给' },
        { id: '3', name: '红玫瑰' }
      ]
    };
  },
  validations: {
    title: {
      required
    },
    introduction: {
      required
    },
    tags: {
      required
    }
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.required && errors.push('标题必填');
      return errors;
    },
    introductionErrors() {
      const errors = [];
      if (!this.$v.introduction.$dirty) return errors;
      !this.$v.introduction.required && errors.push('简介必填');
      return errors;
    },
    tagsErrors() {
      const errors = [];
      if (!this.$v.tags.$dirty) return errors;
      !this.$v.tags.required && errors.push('简介必填');
      return errors;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>