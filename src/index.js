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
    var _a, _b, _c, _d, _e, _f;
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
        if (document.getElementById('userhiba').textContent == '' && felhasznalonev.includes('&') || felhasznalonev.includes('=') || felhasznalonev.includes('_') || felhasznalonev.includes('-') || felhasznalonev.includes('+') || felhasznalonev.includes(',') || felhasznalonev.includes("'") || felhasznalonev.includes('<') || felhasznalonev.includes('>') || felhasznalonev.includes('..') || felhasznalonev.includes('@')) {
            document.getElementById('userhiba').textContent = 'A felhasználónév hibás karaktert tarzalmaz!';
        }
        if (felhasznalonev == '') {
            document.getElementById('userhiba').textContent = '';
        }
    });
    (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.addEventListener('input', (e) => {
        let email = document.getElementById('email').value;
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };
        if (validateEmail(email)) {
            document.getElementById('emailhiba').textContent = '';
        }
        else {
            document.getElementById('emailhiba').textContent = 'Hibás email cím.';
        }
        if (email == '') {
            document.getElementById('emailhiba').textContent = '';
        }
    });
    (_c = document.getElementById('reemail')) === null || _c === void 0 ? void 0 : _c.addEventListener('input', (e) => {
        let elso = document.getElementById('email').value;
        let masodik = document.getElementById('reemail').value;
        if (elso != masodik) {
            document.getElementById('reemailhiba').textContent = 'A megadott email címek nem egyeznek!';
        }
        else {
            document.getElementById('reemailhiba').textContent = '';
        }
        if (masodik == '') {
            document.getElementById('reemailhiba').textContent = '';
        }
    });
    (_d = document.getElementById('password')) === null || _d === void 0 ? void 0 : _d.addEventListener('input', (e) => {
        let jelszo = document.getElementById('password').value;
        if (jelszo.length < 5 || jelszo.length > 10) {
            document.getElementById('pwhiba').textContent = 'A jelszó 5 és 10 karakter közötti hosszúságú lehet!';
        }
        else {
            document.getElementById('pwhiba').textContent = '';
        }
        if (jelszo == '') {
            document.getElementById('pwhiba').textContent = '';
        }
    });
    (_e = document.getElementById('repassword')) === null || _e === void 0 ? void 0 : _e.addEventListener('input', (e) => {
        let jelszo = document.getElementById('password').value;
        let jelszo2 = document.getElementById('repassword').value;
        if (jelszo != jelszo2) {
            document.getElementById('repwhiba').textContent = 'A két jelszó nem egyezik!';
        }
        else {
            document.getElementById('repwhiba').textContent = '';
        }
        if (jelszo2 == '') {
            document.getElementById('repwhiba').textContent = '';
        }
    });
    (_f = document.getElementById('form')) === null || _f === void 0 ? void 0 : _f.addEventListener('submit', function (evt) {
        evt.preventDefault();
        window.history.back();
        alert('sikeres regisztráció');
    });
});
