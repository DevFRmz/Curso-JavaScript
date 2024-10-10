import './style.css'
import { RickAndMortyApp } from './src/breakingbad/rick-and-morty'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id='app-title'>Hello Vite!</h1>
    <div class="card">
    
    </div>
  </div>
`
const element = document.querySelector('.card');
RickAndMortyApp(element);
