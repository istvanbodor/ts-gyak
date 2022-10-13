
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
                }   else {
                    (document.getElementById('userhiba') as HTMLElement).textContent = '';
                }
                 
                
                if( (document.getElementById('userhiba') as HTMLElement).textContent == '' && felhasznalonev.includes('&') ||  felhasznalonev.includes('=') ||  felhasznalonev.includes('_') ||  felhasznalonev.includes('-') ||  felhasznalonev.includes('+') ||  felhasznalonev.includes(',') ||  felhasznalonev.includes("'") ||  felhasznalonev.includes('<') ||  felhasznalonev.includes('>') ||  felhasznalonev.includes('..') ||  felhasznalonev.includes('@'))
                {
                    (document.getElementById('userhiba') as HTMLElement).textContent = 'A felhasználónév hibás karaktert tarzalmaz!';
                } 

                if(felhasznalonev =='')
                {
                    (document.getElementById('userhiba') as HTMLElement).textContent = '';
                }
              
            }
        );

        document.getElementById('email')?.addEventListener('input', (e)=>{

            let email : string = (document.getElementById('email') as HTMLInputElement).value;
            const validateEmail = (email : string) => {
                return String(email)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );
              };

              if(validateEmail(email))
              {
                (document.getElementById('emailhiba') as HTMLElement).textContent = '';
              }
              else {
                (document.getElementById('emailhiba') as HTMLElement).textContent = 'Hibás email cím.';
              }
              if (email =='')
              {
                (document.getElementById('emailhiba') as HTMLElement).textContent = '';
              }

        });

    
        document.getElementById('reemail')?.addEventListener('input', (e) =>{
            let elso : string = (document.getElementById('email') as HTMLInputElement).value;
            let masodik : string = (document.getElementById('reemail') as HTMLInputElement).value;
            if (elso!=masodik) {
                (document.getElementById('reemailhiba') as HTMLElement).textContent = 'A megadott email címek nem egyeznek!';
            }
            else {(document.getElementById('reemailhiba') as HTMLElement).textContent = '';}
            if (masodik=='')
            {
                (document.getElementById('reemailhiba') as HTMLElement).textContent = '';
            }

        });


        document.getElementById('password')?.addEventListener('input', (e) =>{
            let jelszo : string = (document.getElementById('password') as HTMLInputElement).value;
            if (jelszo.length<5 || jelszo.length>10)
            {
                (document.getElementById('pwhiba') as HTMLElement).textContent = 'A jelszó 5 és 10 karakter közötti hosszúságú lehet!';
            }
            else{(document.getElementById('pwhiba') as HTMLElement).textContent = '';}
            if (jelszo=='') {(document.getElementById('pwhiba') as HTMLElement).textContent = '';}


        });

        document.getElementById('repassword')?.addEventListener('input', (e) =>{    
            let jelszo : string = (document.getElementById('password') as HTMLInputElement).value;
            let jelszo2 : string = (document.getElementById('repassword') as HTMLInputElement).value;

            if (jelszo!=jelszo2)
            {
                (document.getElementById('repwhiba') as HTMLElement).textContent = 'A két jelszó nem egyezik!';
            }
            else {(document.getElementById('repwhiba') as HTMLElement).textContent = '';}

            if (jelszo2=='')
            {(document.getElementById('repwhiba') as HTMLElement).textContent = '';}



        });
    
        document.getElementById('form')?.addEventListener('submit', function(evt) {
            evt.preventDefault();
            window.history.back();
            alert('sikeres regisztráció')
        });

});