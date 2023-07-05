<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="search-bar">
        <div>
            <input type="text" placeholder="" v-model="store.serchtext" @keyup.enter="$emit('cerca')">
            <button @click="$emit('cerca')">vai</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 400px;
}

input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 70%;
}

button {
    padding: 8px 16px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}
</style>
