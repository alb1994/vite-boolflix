<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            listageneri: [
                {},
                {
                    "id": 28,
                    "name": "Action"
                },
                {
                    "id": 12,
                    "name": "Adventure"
                },
                {
                    "id": 16,
                    "name": "Animation"
                },
                {
                    "id": 35,
                    "name": "Comedy"
                },
                {
                    "id": 80,
                    "name": "Crime"
                },
                {
                    "id": 99,
                    "name": "Documentary"
                },
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 10751,
                    "name": "Family"
                },
                {
                    "id": 14,
                    "name": "Fantasy"
                },
                {
                    "id": 36,
                    "name": "History"
                },
                {
                    "id": 27,
                    "name": "Horror"
                },
                {
                    "id": 10402,
                    "name": "Music"
                },
                {
                    "id": 9648,
                    "name": "Mystery"
                },
                {
                    "id": 10749,
                    "name": "Romance"
                },
                {
                    "id": 878,
                    "name": "Science Fiction"
                },
                {
                    "id": 10770,
                    "name": "TV Movie"
                },
                {
                    "id": 53,
                    "name": "Thriller"
                },
                {
                    "id": 10752,
                    "name": "War"
                },
                {
                    "id": 37,
                    "name": "Western"
                }
            ]
        }
    },
    methods: {

    },
}
</script>

<template>
    <div>
        <div>
            <input type="text" placeholder="" v-model="store.serchtext" @keyup.enter="$emit('cerca')">
            <select v-model="store.genere">
                <option v-for="(generi, index) in listageneri" :key="index" :value="generi.id">{{ generi.name }}</option>
            </select>
            <button @click="$emit('cerca')">vai</button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>