import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=d3d234302eb94390ac484f418bb0621a&query=',

    genere: '',

    serchtext: '',

    listafilm: []
})
