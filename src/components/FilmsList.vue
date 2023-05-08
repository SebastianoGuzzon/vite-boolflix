<script>
import { store } from "../store";
export default {
  name: 'FilmList',
  data() {
    return {
      store
    }
  },
}
</script>

<!-- 
**Milestone 3:**
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote  -->

<template >
  <div class="col mb-5" v-for="film in store.media">
    <div class="my_card">
      <img class="foto" :src="'https://image.tmdb.org/t/p/original/' + film.poster_path" alt="image not available">

      <div class=" details p-3">
        <div class="info">
          <h5>Title: {{ film.title || film.name }}</h5>
          <h6 v-if="(film.title || film.name) !== (film.original_title || film.original_name)">Original Title: {{
            film.original_title || film.original_name }}</h6>
        </div>
        <div class="flag d-flex">
          <span>language:</span>
          <img :src="store.findFlags(film.original_language)" alt="flag not find">
        </div>
        <p class="stars mt-1">
          <span>Rate:</span>
          <font-awesome-icon icon="fa-solid fa-star" v-for="(singlestar, index) in 5"
            :class="Math.floor(film.vote_average / 2) > index ? 'gold' : 'gray'" />
        </p>
        <p class="description">{{ film.overview }}</p>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
.col {
  color: white;


  .my_card {

    height: 408px;
    border: 1px solid rgba(237, 237, 237, 0.247);
    border-radius: 10px;


    .foto {
      border-radius: 10px;
      height: 100%;
      width: 100%;
      object-fit: cover;

    }

    //     **Milestone 4:**
    // Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
    // Un header che contiene logo e search bar
    // Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio la poster_path con w342)
    // Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview


    .details {
      display: none;
      overflow-y: auto;
      height: 408px;

      .info {
        h5 {
          font-size: 1rem;
        }

        h6 {
          font-size: 0.75rem;
        }
      }

      .flag {
        img {
          margin-left: 0.25rem;
          width: 25px;
          object-fit: contain;

        }
      }

      .stars {
        .gray {
          color: #ededed;
        }

        .gold {
          color: yellow;
        }
      }

      .description {
        font-size: 0.65rem;
      }

    }

    &:hover .foto {
      display: none;
    }

    &:hover .details {
      display: block;
    }
  }
}
</style>