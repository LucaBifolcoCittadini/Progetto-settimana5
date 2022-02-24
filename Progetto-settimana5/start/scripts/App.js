import { FileDoc } from "./FileDoc.js";
import { UserInterface } from "./UserInterface.js";
/*importa le due classi definite negli altri files*/
export class App {

    /* costruttore: i dati sono presi dal file editor.js che contengono gli id dell'html, che istanzia una nuova app e tramite il costruttore assegna i valori all'istanza di UserInterface  */
    constructor(_ui) {
        this.ui = _ui;

        /*inizializza tinymce, passando il riferimento all html tramite la proprietà dell'oggetto*/
        tinymce.init({
            selector: `#${this.ui.editor}`
        });







        var newList = document.querySelector('#new');
        var save = document.querySelector('#save');
        var ui = document.querySelector('#title_txt');
        var editor = document.querySelector('#editor_txt');
        var list = document.querySelector('#file_list');
        var files = [];
        let lista1;



        save.addEventListener('click', function () {
            var yourFiles = new App(ui.value);
            files.push(yourFiles)



            lista1 = '';
            files.forEach(element => {
                lista1 += "<li class='list-group-item d-flex justify-content-between align-items-center'>" + element.ui + '</li>';
                list.innerHTML = lista1;
            });
            console.log(files);

        })

        newList.addEventListener('click', function () {
            ui.value = '';
        })
        // quando nei metodi dovrò usare tinymce.get(this.ui.editor) avrò due metodi .setContent() e .getContent()
        /*assegnare le proprietà dell'oggetto riferendosi al DOM e passando la proprietà dell'oggetto UserInterface come sopra*/

        /* chiamare il metodo che fa il bind dell'evento click */

        /* chiamare il metodo che recupera i dati dal localStorage*/
    }

    /* metodo che fa il bind sul click, attenzione all'uso di this*/

    /* metodo che recupera i dati nel localStorage*/

    /* metodo che carica l'oggetto file */

    /* metodo che ripulisce */

    /* altro metodo: se non ci sono file caricati crea un oggetto file e fa il push nell'array */
    /* altrimenti modifica il file assegnando i valori letti dal form*/
    /* salva l'array nel localStorage e chiama la funzione che stampa a video*/

    /* metodo che stampa a video */

    /* metodo che svuota il form */


}