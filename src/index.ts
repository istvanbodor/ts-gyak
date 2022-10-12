
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
   
        document.getElementById('felhasznalonev')?.addEventListener('input', (e) =>{
                /*
                let felh  = e.currentTarget as HTMLInputElement;
                let felha : string = felh.value;
                */
               let felhasznalonev = (document.getElementById('felhasznalonev') as HTMLInputElement).value;
              
                if (felhasznalonev.length >30 || felhasznalonev.length< 6)
                {
                    (document.getElementById('userhiba') as HTMLElement).textContent = 'A felhasználónév 6-30 karakter hosszú kell legyen!';
                } else {
                    (document.getElementById('userhiba') as HTMLElement).textContent = '';
                }

                 if( felhasznalonev.includes('&') ||  felhasznalonev.includes('=') ||  felhasznalonev.includes('_') ||  felhasznalonev.includes('-') ||  felhasznalonev.includes('+') ||  felhasznalonev.includes(',') ||  felhasznalonev.includes("'") ||  felhasznalonev.includes('<') ||  felhasznalonev.includes('>') ||  felhasznalonev.includes('..'))
                {
                    (document.getElementById('userhiba') as HTMLElement).textContent = 'A felhasználónév hibás karaktert tarzalmaz!';
                }
                else {(document.getElementById('userhiba') as HTMLElement).textContent = '';}
            }
        );

    



});