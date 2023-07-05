
<script>
export default {
    props: {
        myfilm: Object // Proprietà passata al componente per il film
    }
}
</script>
<template>
    <div class="card">
        <!-- Immagine del poster -->
        <div class="poster-container">
            <img :src="'http://image.tmdb.org/t/p/w300/' + myfilm.poster_path" class="poster-img" />
        </div>

        <!-- Informazioni sul film -->
        <div class="info-container">
            <p class="title">{{ myfilm.title }}</p> <!-- Titolo del film -->
            <p class="original-title">{{ myfilm.original_title }}</p> <!-- Titolo originale del film -->
            <p class="release-date">Data di uscita: {{ myfilm.release_date }}</p> <!-- Data di uscita del film -->
            <p class="vote">Voto: {{ Math.round(myfilm.vote_average) }}</p> <!-- Voto arrotondato del film -->
        </div>
    </div>
</template>
<style scoped>
/* Stile del componente card */
.card {
    border: none;
    background-color: #000000b0;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
}

/* Stile del container dell'immagine del poster */
.poster-container {
    width: 30%;
    margin-right: 20px;
}

/* Stile dell'immagine del poster */
.poster-img {
    width: 100%;
    height: auto;
    max-width: 200px;
    /* Imposta la larghezza massima dell'immagine a 200px */
}

/* Stile del container delle informazioni sul film */
.info-container {
    flex-grow: 1;
}

/* Stile del titolo del film */
.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
}

/* Stile del titolo originale del film */
.original-title {
    font-size: 18px;
    margin-bottom: 5px;
}

/* Stile della data di uscita del film e del voto */
.release-date,
.vote {
    margin-bottom: 5px;
}
</style>



