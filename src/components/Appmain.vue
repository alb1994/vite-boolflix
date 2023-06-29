<script>
import { store } from '../store.js';
import Appcard from './Appcard.vue';
export default {
  components: {
    Appcard,
  },
  data() {
    return {
      store
    }
  },
}
</script>
<template>
  <div class="card">
    <div class="flex flex-wrap">
      <div class="card-item" v-for="(film, index) in store.listafilm" :key="film.id">
        <Appcard :myfilm="film" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>