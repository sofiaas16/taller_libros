class DetalleLibro extends HTMLElement {
    constructor() {
        super();
        // Creo el shadow DOM para que los estilos y contenido estén aislados
        this.attachShadow({ mode: 'open' });
    }

    // Estos son los datos que voy a estar pendiente por si cambian
    static get observedAttributes() {
        return ['titulo', 'autor', 'imagen', 'fecha', 'genero', 'resumen', 'frases'];
    }

    // Si algún dato cambia, vuelvo a dibujar los detalles
    attributeChangedCallback(nombre, valorViejo, valorNuevo) {
        this.mostrarDetalle();
    }

    // Apenas el componente se añade al HTML, lo dibujo y le pongo funcionalidad al botón
    connectedCallback() {
        this.mostrarDetalle();
        // Escucho el clic del botón para volver a la lista
        this.shadowRoot.querySelector('.btn-volver').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('volverALista', { bubbles: true }));
        });
    }

    // Armo la vista con los detalles del libro
    mostrarDetalle() {
        const titulo = this.getAttribute('titulo');
        const autor = this.getAttribute('autor');
        const imagen = this.getAttribute('imagen');
        const fecha = this.getAttribute('fecha');
        const genero = this.getAttribute('genero');
        const resumen = this.getAttribute('resumen');
        const frases = JSON.parse(this.getAttribute('frases') || '[]'); // Si no hay frases, dejo un array vacío

        this.shadowRoot.innerHTML = `
            <style>
                .detalle {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 20px;
                    margin: 10px;
                    text-align: center;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
                .frase {
                    font-style: italic;
                    margin: 10px 0;
                }
                .btn-volver {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .btn-volver:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="detalle">
                <img src="${imagen}" alt="${titulo}">
                <h2>${titulo}</h2>
                <p>Autor: ${autor}</p>
                <p>Fecha de publicación: ${fecha}</p>
                <p>Género: ${genero}</p>
                <p>Resumen: ${resumen}</p>
                <h3>Citas:</h3>
                <div>
                    ${frases.map(frase => `<p class="frase">"${frase}"</p>`).join('')}
                </div>
                <button class="btn-volver">Volver</button>
            </div>
        `;
    }
}

// Registro el componente con el nombre en español
customElements.define('book-detail', DetalleLibro);