import React from "react";

function ChangeColor(){

    const btn = document.getElementById('btn');
    let counter = 0;
    const colors = ['#17b6a0', '#e7c905'];
    btn.addEventListener('click', function onClick() {
      btn.style.backgroundColor = colors[counter];
      counter = counter >= colors.length - 1 ? 0 : counter + 1;
    });

}

export default ChangeColor;