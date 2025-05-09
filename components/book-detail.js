
class DetalleLibro extends HTMLElement {
    constructor() {
        super();
        // Creo el shadow DOM para que los estilos y contenido estén aislados
        this.attachShadow({ mode: 'open' });
    }

    // Estos son los datos que voy a estar pendiente por si llegan a cambiar
    static get observedAttributes() {
        return ['titulo', 'autor', 'imagen', 'fecha', 'genero', 'resumen', 'frases'];
    }

    attributeChangedCallback(nombre, valorViejo, valorNuevo) {
        this.mostrarDetalle();
    }

    // Apenas el componente se añade al HTML, lo dibujo
    connectedCallback() {
        this.mostrarDetalle();
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
            .contenedor {
                display: flex;
                justify-content: center;    
                align-items: center;
                min-height: 100vh;
            }
    
            .detalle {
                border: 2px solid #BFA2DB;
                border-radius: 12px;
                padding: 20px;
                margin: 10px;
                text-align: center;
                background-color: #F3E8FF;
                box-shadow: 0 4px 10px rgba(120, 94, 240, 0.15);
                max-width: 400px;
            }
    
            img {
                max-width: 100%;
                height: auto;
                border-radius: 8px;
                margin-bottom: 15px;
            }
    
            h2 {
                font-size: 1.5em;
                color: #000000;
                margin-bottom: 10px;
            }
    
            p {
                font-size: 1em;
                color: #3D3B4F;
                margin: 5px 0;
            }
    
            .frase {
                
                color: #6D6875;
                background-color: #EDE4FF;
                padding: 8px;
                border-left: 4px solid #BFA2DB;
                margin: 10px auto;
                max-width: 90%;
                border-radius: 5px;
            }
    
            h3 {
                margin-top: 20px;
                color: #000000;
            }
        </style>
        <div class="contenedor">
            <div class="detalle">
                <img src="${imagen}" alt="${titulo}">
                <h2>${titulo}</h2>
                <p><strong>Autor:</strong> ${autor}</p>
                <p><strong>Fecha de publicación:</strong> ${fecha}</p>
                <p><strong>Género:</strong> ${genero}</p>
                <p><strong>Resumen:</strong> ${resumen}</p>
                <h3>Citas:</h3>
                <div>
                    ${frases.map(frase => `<p class="frase">"${frase}"</p>`).join('')}
                </div>
            </div>
        </div>
    `;
    }
}

// Registro el componente con el nombre en español
customElements.define('book-detail', DetalleLibro);

