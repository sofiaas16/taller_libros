// Defino una clase personalizada llamada TarjetaLibro que extiende HTMLElement
class TarjetaLibro extends HTMLElement {
    constructor() {
        super(); // Llamo al constructor de la clase padre (HTMLElement)
        this.attachShadow({ mode: 'open' }); // Creo un Shadow DOM en modo 'open' para encapsular el contenido
    }

    // Especifico qué atributos quierpo observar por si llegan a  cambiar
    static get observedAttributes() {
        return ['coverUrl', 'title', 'author', 'synopsis'];
    }

    // Se ejecuta cuando uno de los atributos observados cambia
    attributeChangedCallback(nombre, valorAnterior, valorNuevo) {
        this.mostrar(); // Llamo al método mostrar() para actualizar el contenido
    }

    // Se ejecuta cuando el componente se agrega al DOM
    connectedCallback() {
        this.mostrar(); // Llamo al método mostrar() para renderizar la tarjeta

        // Agrego un evento al hacer clic en la tarjeta
        this.shadowRoot.querySelector('.tarjeta').addEventListener('click', () => {
            // Se lanza un evento personalizado llamado 'libroSeleccionado'
            this.dispatchEvent(new CustomEvent('libroSeleccionado', {
                detail: { titulo: this.getAttribute('title') } // Envío el título del libro como detalle
            }));
        });
    }

    // Método que construye y muestra el contenido HTML del componente
    mostrar() {
        // Obtengo los valores de los atributos del componente
        const portada = this.getAttribute('coverUrl');
        const titulo = this.getAttribute('title');
        const autor = this.getAttribute('author');
        const sinopsis = this.getAttribute('synopsis');

        // Inserto HTML y CSS dentro del Shadow DOM
        this.shadowRoot.innerHTML = `
        <style>
            .tarjeta {
                border: 2px solid #BFA2DB; /* Borde morado suave */
                border-radius: 10px;
                padding: 15px;
                margin: 10px;
                background-color: #F3E8FF; /* Fondo claro con toque vintage */
                box-shadow: 0 4px 8px rgba(36, 0, 194, 0.2); /* Sombra suave */
                transition: transform 0.2s ease, box-shadow 0.3s ease;
            }
    
            .tarjeta:hover {
                transform: scale(1.02);
                box-shadow: 0 6px 12px rgba(0, 169, 221, 0.3);
            }
    
            img {
                max-width: 100%;
                height: auto;
                border-radius: 5px;
                margin-bottom: 10px;
            }
    
            h2 {
    
                font-size: 1.3em;
                color:#00000; 
                margin-bottom: 8px;
            }
    
            p {
                font-size: 0.95em;
                color: #3D3B4F; /* Texto gris oscuro/morado apagado */
                margin: 4px 0;
            }
        </style>
        <div class="tarjeta">
            <img src="${portada}" alt="${titulo}"> <!-- Imagen de portada -->
            <h2>${titulo}</h2> <!-- Título del libro -->
            <p><strong>Autor: </strong> ${autor}</p> <!-- Nombre del autor -->
            <p>${sinopsis}</p> <!-- Sinopsis del libro -->
        </div>
    `;

    }
}

// Registro el componente personalizado con el nombre 'book-card'
customElements.define('book-card', TarjetaLibro);
