import generateJoke from "./generateJoke";
import {v4 as uuidv4} from "uuid";
import './style/style.scss';
import img from './assets/download.png';


const imgEl = document.getElementById('img');
imgEl.src = img;

console.log(generateJoke());
console.log(uuidv4());