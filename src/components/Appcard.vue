<script>
export default {
    props: {
        myfilm: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="'http://image.tmdb.org/t/p/w500/' + myfilm.poster_path" class="poster-img" />
        <p>Nome: {{ myfilm.title }}</p>
        <p>NOme originale: {{ myfilm.original_title }}</p>
        <p>Data uscita: {{ myfilm.release_date }}</p>
        <p>Voto: {{ Math.round(myfilm.vote_average) }}</p>
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