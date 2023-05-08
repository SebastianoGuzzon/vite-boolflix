<script>
import { store } from '../store'
export default {
  name: 'AppHeader',
  data() {
    return {
      store,
    }
  },
}
</script>
<template>
  <header>
    <div class="layover">
      <div class="myContainer d-flex flex-column align-items-center justify-content-center text-center">
        <div style="color: red; font-size: 5rem; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;"
          class="logo">BOOLFLIX</div>

        <!-- **Milestone 1:**
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
Titolo
Titolo Originale
Lingua
Voto -->

        <div class="title">
          <h1>Film, serie TV e tanto altro.</h1>
          <h2>Guarda ciò che vuoi ovunque.</h2>
          <h3>Inserisci il nome del Film o della Serie TV qui sotto.</h3>
        </div>
        <div class="search d-flex gap-2 my-5 w-50">
          <input type="search" class="form-control" v-model="store.searchTitle" @input="store.checkInput"
            @keyup.enter="store.callApi(store.searchTitle)">
          <button type="submit" class="btn btn-dark btn-netflix" :class="store.check === false ? 'disabled' : ''"
            @click="store.callApi(store.searchTitle)">Search</button>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
// 
header {
  margin: 6rem 0;
  background-image: url(../assets/img/background_image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 12rem);
  color: white;

  .layover {
    height: 100%;
    background: rgba(0, 0, 0, .4);
    background-image: linear-gradient(0deg, rgba(0, 0, 0, .8) 0, transparent 60%, rgba(0, 0, 0, .8));

    .myContainer {
      margin: auto;
      max-width: 800px;
      height: 100%;

      .netflix-logo {
        width: 350px;
        fill: #e50914;
        line-height: normal;
      }

      .title {

        h1 {
          font-weight: bolder;
          font-size: 4rem;
        }

        h2 {
          font-size: 1.625rem;
        }

        h3 {
          font-size: 1.2rem;
        }
      }

      .form-control:focus {
        box-shadow: none;
        border-color: black;
      }

      .btn-netflix {
        background-color: #E40715;
      }


      .disabled {
        pointer-events: none;
      }

    }
  }
}
</style>