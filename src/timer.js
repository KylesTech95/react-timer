import { useState,React } from 'react'
let c = 1;
export default function Play() {
    let sec = document.querySelector('.seconds')
    let min = document.querySelector('.minutes')

let go = setInterval(() => {
        if(sec.textContent > 0 && min.textContent > 0)
        {sec.textContent -= c} 
        else
        {sec.textContent=59;
        min.textContent -= c} 
    }, 250);

}
