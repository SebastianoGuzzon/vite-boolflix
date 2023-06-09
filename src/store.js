import { reactive } from 'vue'
import axios from 'axios'

//   **Milestone 3:**
// In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. 
// Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
// Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote)


export const store = reactive({

  unloackButton: true,
  check: true,
  error: null,
  media: null,
  searchTitle: '',

  callApi(name) {

    // Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell’URL passata dall’API.

    this.media = null;
    this.callAxios('https://api.themoviedb.org/3/search/movie?api_key=ab909735a57a0d14313842405a2fd07c&query=' + name)
    this.callAxios('https://api.themoviedb.org/3/search/tv?api_key=ab909735a57a0d14313842405a2fd07c&query=' + name)
    this.unloackButton = false,
      this.check = false
  },
  checkInput() {
    if (this.unloackButton === false) {
      this.check = true
    }

    let appoggio = ''
    for (let i = 0; i < this.searchTitle.length; i++) {
      appoggio += ' ';

      if (this.searchTitle === appoggio) {
        this.check = false
      } else {
        this.check = true
      }
    }
  },


  //   // Milestone 2:
  // Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

  // Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
  // Qui un esempio di chiamata per le serie tv:
  // https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

  findFlags(lang) {
    if (lang === 'en') {
      return 'https://countryflagsapi.com/png/gb'
    } else if (lang === 'ja') {
      return 'https://countryflagsapi.com/png/JP'
    }
    else {
      return 'https://countryflagsapi.com/png/' + lang
    }
  },
  callAxios(call) {
    axios.get(call)
      .then(function (response) {
        if (store.media === null) {
          store.media = response.data.results
        } else {
          response.data.results.forEach(element => {
            store.media.push(element)
          });
        }
        console.log(store.media);
      })
      .catch(function (error) {
        console.log(error);
      });
  },


})