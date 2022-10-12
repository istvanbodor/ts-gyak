"use strict";
/*
let t = [1, 2, 3];
t.filter(e => e > 2);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('szoveg')!.addEventListener('input', () => {

        let elem = document.getElementById('szoveg') as HTMLInputElement;
        document.body.style.backgroundColor = elem.value;


    })



});*/
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('felhasznalonev')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', (e) => {
        /*
        let felh  = e.currentTarget as HTMLInputElement;
        let felha : string = felh.value;
        */
        let felhasznalonev = document.getElementById('felhasznalonev').value;
        if (felhasznalonev.length > 30 || felhasznalonev.length < 6) {
            document.getElementById('userhiba').textContent = 'A felhasználónév 6-30 karakter hosszú kell legyen!';
        }
        else {
            document.getElementById('userhiba').textContent = '';
        }
        if (felhasznalonev.includes('&') || felhasznalonev.includes('=') || felhasznalonev.includes('_') || felhasznalonev.includes('-') || felhasznalonev.includes('+') || felhasznalonev.includes(',') || felhasznalonev.includes("'") || felhasznalonev.includes('<') || felhasznalonev.includes('>') || felhasznalonev.includes('..')) {
            document.getElementById('userhiba').textContent = 'A felhasználónév hibás karaktert tarzalmaz!';
        }
        else {
            document.getElementById('userhiba').textContent = '';
        }
    });
});
