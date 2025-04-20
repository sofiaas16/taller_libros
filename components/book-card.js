class TarjetaLibro extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['coverUrl', 'title', 'author', 'synopsis'];
    }

    attributeChangedCallback(nombre, valorAnterior, valorNuevo) {
        this.mostrar();
    }

    connectedCallback() {
        this.mostrar();
        this.shadowRoot.querySelector('.tarjeta').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('libroSeleccionado', {
                detail: { titulo: this.getAttribute('title') }
            }));
        });
    }

    mostrar() {
        const portada = this.getAttribute('coverUrl');
        const titulo = this.getAttribute('title');
        const autor = this.getAttribute('author');
        const sinopsis = this.getAttribute('synopsis');

        this.shadowRoot.innerHTML = `
            <style>
                .tarjeta {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                    margin: 10px;
                    cursor: pointer;
                    text-align: center;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
            </style>
            <div class="tarjeta">
                <img src="${portada}" alt="${titulo}">
                <h2>${titulo}</h2>
                <p>Autor: ${autor}</p>
                <p>${sinopsis}</p>
            </div>
        `;
    }
}

customElements.define('book-card', TarjetaLibro);
