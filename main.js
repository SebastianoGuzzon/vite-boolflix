import './src/style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<H1>BOOLFIX<H1>
`

setupCounter(document.querySelector('#counter'))
