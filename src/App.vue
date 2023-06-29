<script>
import axios from 'axios';
import { store } from './store.js';
import Appcard from './components/Appcard.vue';
import Appsearch from './components/Appsearch.vue';
import Appmain from './components/Appmain.vue'

export default {
  components: {
    Appcard,
    Appmain,
    Appsearch


  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.getcharacters()
  },
  methods: {
    getcharacters() {
      console.log(store.serchtext);
      let myurl = store.apiUrl;

      if (store.serchtext !== '') {
        myurl += '?original_name=${store.serchtext}';
      }

      axios.get(myurl).then((response) => {
        store.listafilm = response.data.results;
        console.log(response.data.results)
      })
    }
  }
}
</script>

<template>
  <div class="body">
    <div class="conteiner">
      <Appsearch @cerca="getcharacters" />
      <Appmain />
      <Appcard />

    </div>
  </div>
</template>

<style lang ="scss" scoped>
@use './components/style/generals.scss' as *
</style>
