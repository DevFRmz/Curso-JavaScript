import './style.css'
import { UsersApp } from './src/users/user-app'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>AGENDA</h1>
    <div class="card">

    </div>
    
  </div>
`

const element = document.querySelector('.card');

UsersApp(element);
