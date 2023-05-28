const container= document.getElementById('container');

let n = prompt("enter a number within 100");



console.log(hi(n));

function hi(n){
    for(j=0;j<n;j++){
        const content = document.createElement('div');
        content.classList.add(`contentof${j}`);
        container.appendChild(content);
        for(i=0;i <= n-1;i++){
            let k=j;
            let rap = document.querySelector(`.contentof${k}`);
            let helo = document.createElement('div');
            helo.classList.add('hi');
            rap.appendChild(helo);
        }
    }
}




