import { createApp } from 'vue'
import './assets/scss/styles.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

//   **Milestone 3:**
// In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell’URL passata dall’API.
// Esempio di URL:
// https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

// Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
// Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote)
