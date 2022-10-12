"use strict";
let t = [1, 2, 3];
t.filter(e => e > 2);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('szoveg').addEventListener('input', () => {
        let elem = document.getElementById('szoveg');
        document.body.style.backgroundColor = elem.value;
    });
});
