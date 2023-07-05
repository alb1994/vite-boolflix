<script>
export default {
    props: {
        myfilm: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="'https://api.themoviedb.org/3/search/multi?api_key=d3d234302eb94390ac484f418bb0621a&query=' + myfilm.poster_path"
            class="poster-img" />
        <h4>Nome: {{ myfilm.original_title }}</h4>
        <p>Data uscita: {{ myfilm.release_date }}</p>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 10px;
    color: red;
}

.poster-img {
    width: 100%;
    max-width: 300px;
    /* Imposta la larghezza massima dell'immagine */
    height: auto;
    /* L'altezza sarà proporzionale alla larghezza */
}
</style>