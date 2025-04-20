// Datos de los libros
let bookData = [
    {
        "title": "Don Quijote de la Mancha",
        "author": "Miguel de Cervantes",
        "coverUrl": "https://www.marcialpons.es/media/img/portadas/2023/4/18/9788408270881jfif",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Miguel de Cervantes.",
        "publishedDate": "1977",
        "genre": "Ficción literaria",
        "summary": "Don Quijote de la Mancha es una obra representativa de Miguel de Cervantes que explora las complejidades humanas y sociales.",
        "quotes": [
            "Hay que ser valiente para ser feliz.",
            "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
            "La vida no es la que uno vivió, sino la que uno recuerda."
        ]
    },
    {
        "title": "La sombra del viento",
        "author": "Carlos Ruiz Zafón",
        "coverUrl": "https://imagessl7.casadellibro.com/a/l/t0/07/9788408093107.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Carlos Ruiz Zafón.",
        "publishedDate": "1996",
        "genre": "Narrativa contemporánea",
        "summary": "La sombra del viento es una obra representativa de Carlos Ruiz Zafón que explora las complejidades humanas y sociales.",
        "quotes": [
            "Cada quien es dueño de su propio destino.",
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
            "La vida no es la que uno vivió, sino la que uno recuerda."
        ]
    },
    {
        "title": "Rayuela",
        "author": "Julio Cortázar",
        "coverUrl": "https://img.huffingtonpost.com/asset/5c8a6f7d20000043046f2768.jpeg?ops=scalefit_960_noupscale",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Julio Cortázar.",
        "publishedDate": "1987",
        "genre": "Novela",
        "summary": "Rayuela es una obra representativa de Julio Cortázar que explora las complejidades humanas y sociales.",
        "quotes": [
            "No existe mejor medicina que tener pensamientos alegres.",
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
            "Nunca se debe confundir la verdad con la opinión de la mayoría."
        ]
    },
    {
        "title": "El amor en los tiempos del cólera",
        "author": "Gabriel García Márquez",
        "coverUrl": "https://galakia.com/wp-supercontent/uploads/2016/01/El-Amor-en-los-Tiempos-del-C%C3%B3lera-Gabriel-Garcia-Marquez.jpg?x72482",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Gabriel García Márquez.",
        "publishedDate": "1997",
        "genre": "Narrativa contemporánea",
        "summary": "El amor en los tiempos del cólera es una obra representativa de Gabriel García Márquez que explora las complejidades humanas y sociales.",
        "quotes": [
            "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
            "La vida no es la que uno vivió, sino la que uno recuerda.",
            "No hay medicina que cure lo que no cura la felicidad."
        ]
    },
    {
        "title": "Pedro Páramo",
        "author": "Juan Rulfo",
        "coverUrl": "https://4.bp.blogspot.com/-fLqGAN4XVA4/Vd4f6KR_xNI/AAAAAAAACC0/0Ae1MDXgHkI/s1600/pedro_p%25C3%25A1ramo%255B1%255D.png",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Juan Rulfo.",
        "publishedDate": "1972",
        "genre": "Ficción histórica",
        "summary": "Pedro Páramo es una obra representativa de Juan Rulfo que explora las complejidades humanas y sociales.",
        "quotes": [
            "Cada quien es dueño de su propio destino.",
            "No hay medicina que cure lo que no cura la felicidad.",
            "Nada tiene sentido si no se vive con pasión."
        ]
    },
    {
        "title": "La ciudad y los perros",
        "author": "Mario Vargas Llosa",
        "coverUrl": "https://i.pinimg.com/736x/4a/38/ec/4a38ec737a59c4ca57caf031ba7a8bfa.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Mario Vargas Llosa.",
        "publishedDate": "2005",
        "genre": "Ficción literaria",
        "summary": "La ciudad y los perros es una obra representativa de Mario Vargas Llosa que explora las complejidades humanas y sociales.",
        "quotes": [
            "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
            "Nunca se debe confundir la verdad con la opinión de la mayoría."
        ]
    },
    {
        "title": "Ficciones",
        "author": "Jorge Luis Borges",
        "coverUrl": "https://d202m5krfqbpi5.cloudfront.net/books/1388197956l/426504.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Jorge Luis Borges.",
        "publishedDate": "1960",
        "genre": "Narrativa contemporánea",
        "summary": "Ficciones es una obra representativa de Jorge Luis Borges que explora las complejidades humanas y sociales.",
        "quotes": [
            "Cada quien es dueño de su propio destino.",
            "No existe mejor medicina que tener pensamientos alegres.",
            "La vida no es la que uno vivió, sino la que uno recuerda."
        ]
    },
    {
        "title": "Los detectives salvajes",
        "author": "Roberto Bolaño",
        "coverUrl": "https://th.bing.com/th/id/OIP.Rw9QGAp_ohu95w_RliJasAHaLU?rs=1&pid=ImgDetMain",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Roberto Bolaño.",
        "publishedDate": "1991",
        "genre": "Realismo mágico",
        "summary": "Los detectives salvajes es una obra representativa de Roberto Bolaño que explora las complejidades humanas y sociales.",
        "quotes": [
            "Nunca se debe confundir la verdad con la opinión de la mayoría.",
            "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro."
        ]
    },
    {
        "title": "El túnel",
        "author": "Ernesto Sabato",
        "coverUrl": "https://1.bp.blogspot.com/-iylstgq3JX0/WM7cNec_MII/AAAAAAAACsE/yQUViSokLUIHzAk1LB4Z-ShEsVLg2S_OwCLcB/s1600/El%2Bt%25C3%25BAnel.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Ernesto Sabato.",
        "publishedDate": "1992",
        "genre": "Drama",
        "summary": "El túnel es una obra representativa de Ernesto Sabato que explora las complejidades humanas y sociales.",
        "quotes": [
            "Todo lo que realmente importa sucede en secreto.",
            "La vida no es la que uno vivió, sino la que uno recuerda.",
            "No hay medicina que cure lo que no cura la felicidad."
        ]
    },
    {
        "title": "Sobre héroes y tumbas",
        "author": "Ernesto Sabato",
        "coverUrl": "https://i.pinimg.com/originals/9a/02/b2/9a02b2e77b25263200cbd3777c1ced3e.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Ernesto Sabato.",
        "publishedDate": "2004",
        "genre": "Ciencia ficción",
        "summary": "Sobre héroes y tumbas es una obra representativa de Ernesto Sabato que explora las complejidades humanas y sociales.",
        "quotes": [
            "Todo lo que realmente importa sucede en secreto.",
            "Nada tiene sentido si no se vive con pasión.",
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro."
        ]
    },
    {
        "title": "Crónica de una muerte anunciada",
        "author": "Gabriel García Márquez",
        "coverUrl": "https://3.bp.blogspot.com/-EoIzlalmm5M/XcNowvGPPgI/AAAAAAAADAw/lC4WPM5xJ9Y6d2zenE6kzDGDeBYSAq8mwCK4BGAYYCw/s1600/gabriel-garcia-marquez-cronica-de-una-muerte-anunciada-D_NQ_NP_759425-MLV25442852143_032017-F.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Gabriel García Márquez.",
        "publishedDate": "1996",
        "genre": "Ficción histórica",
        "summary": "Crónica de una muerte anunciada es una obra representativa de Gabriel García Márquez que explora las complejidades humanas y sociales.",
        "quotes": [
            "La vida no es la que uno vivió, sino la que uno recuerda.",
            "No existe mejor medicina que tener pensamientos alegres.",
            "No hay medicina que cure lo que no cura la felicidad."
        ]
    },
    {
        "title": "La casa de los espíritus",
        "author": "Isabel Allende",
        "coverUrl": "https://th.bing.com/th/id/OIP.6iS-oSHAtJ39XtpLzuWsqQHaLX?rs=1&pid=ImgDetMain",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Isabel Allende.",
        "publishedDate": "1990",
        "genre": "Novela",
        "summary": "La casa de los espíritus es una obra representativa de Isabel Allende que explora las complejidades humanas y sociales.",
        "quotes": [
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
            "Nada tiene sentido si no se vive con pasión.",
            "Nunca se debe confundir la verdad con la opinión de la mayoría."
        ]
    },
    {
        "title": "Ensayo sobre la ceguera",
        "author": "José Saramago",
        "coverUrl": "https://th.bing.com/th/id/R.1428e136c2f1315aa39d83b00f182424?rik=x0A%2f9BCXPxRUTg&riu=http%3a%2f%2fblog.pucp.edu.pe%2fblog%2fespacioentreletras%2fwp-content%2fuploads%2fsites%2f1283%2f2020%2f09%2fensayo-sobre-la-ceguera-txalaparta-eus.jpg&ehk=4nSlDBASQF%2feUrYBRSAjKpkFgVwQirQxTCba%2bLKxNic%3d&risl=&pid=ImgRaw&r=0",
        "synopsis": "Una obra destacada de la literatura en español, escrita por José Saramago.",
        "publishedDate": "1999",
        "genre": "Misterio",
        "summary": "Ensayo sobre la ceguera es una obra representativa de José Saramago que explora las complejidades humanas y sociales.",
        "quotes": [
            "Todo lo que realmente importa sucede en secreto.",
            "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
            "Nunca se debe confundir la verdad con la opinión de la mayoría."
        ]
    },
    {
        "title": "El Aleph",
        "author": "Jorge Luis Borges",
        "coverUrl": "https://www.popularlibros.com/imagenes-webp-grandes/9788466/978846634683.webp",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Jorge Luis Borges.",
        "publishedDate": "1971",
        "genre": "Ficción histórica",
        "summary": "El Aleph es una obra representativa de Jorge Luis Borges que explora las complejidades humanas y sociales.",
        "quotes": [
            "No existe mejor medicina que tener pensamientos alegres.",
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
            "Todo lo que realmente importa sucede en secreto."
        ]
    },
    {
        "title": "2666",
        "author": "Roberto Bolaño",
        "coverUrl": "https://www.popularlibros.com/imagenes-webp-grandes/9788466/978846634683.webp",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Roberto Bolaño.",
        "publishedDate": "1986",
        "genre": "Narrativa contemporánea",
        "summary": "2666 es una obra representativa de Roberto Bolaño que explora las complejidades humanas y sociales.",
        "quotes": [
            "La vida no es la que uno vivió, sino la que uno recuerda.",
            "Nada tiene sentido si no se vive con pasión.",
            "Nunca se debe confundir la verdad con la opinión de la mayoría."
        ]
    },
    {
        "title": "La tregua",
        "author": "Mario Benedetti",
        "coverUrl": "https://th.bing.com/th/id/R.6b2da6af1ab09098f6c306bf057d8805?rik=X27tU4tPMiLCzQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-5br-Zlm2ERI%2fUPISJj3CqKI%2fAAAAAAAAARk%2fUX5T5CtZh8k%2fs1600%2fLa-Tregua-Mario-Benedetti.jpg&ehk=lmorfhKtKi7iHN6I4MsYDFD6bKA%2fuvV8QZfxTN6AFzc%3d&risl=&pid=ImgRaw&r=0",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Mario Benedetti.",
        "publishedDate": "1958",
        "genre": "Ficción literaria",
        "summary": "La tregua es una obra representativa de Mario Benedetti que explora las complejidades humanas y sociales.",
        "quotes": [
            "Uno no es de ninguna parte mientras no tenga un muerto bajo la tierra.",
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
            "La vida no es la que uno vivió, sino la que uno recuerda."
        ]
    },
    {
        "title": "El coronel no tiene quien le escriba",
        "author": "Gabriel García Márquez",
        "coverUrl": "https://imagessl2.casadellibro.com/a/l/t0/52/9788497592352.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Gabriel García Márquez.",
        "publishedDate": "2000",
        "genre": "Ficción histórica",
        "summary": "El coronel no tiene quien le escriba es una obra representativa de Gabriel García Márquez que explora las complejidades humanas y sociales.",
        "quotes": [
            "Nunca se debe confundir la verdad con la opinión de la mayoría.",
            "Todo lo que realmente importa sucede en secreto.",
            "La vida no es la que uno vivió, sino la que uno recuerda."
        ]
    },
    {
        "title": "Aura",
        "author": "Carlos Fuentes",
        "coverUrl": "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9781466840041.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Carlos Fuentes.",
        "publishedDate": "1985",
        "genre": "Narrativa contemporánea",
        "summary": "Aura es una obra representativa de Carlos Fuentes que explora las complejidades humanas y sociales.",
        "quotes": [
            "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.",
            "Nunca se debe confundir la verdad con la opinión de la mayoría.",
            "Nada tiene sentido si no se vive con pasión."
        ]
    },
    {
        "title": "Santa Evita",
        "author": "Tomás Eloy Martínez",
        "coverUrl": "https://th.bing.com/th/id/OIP.V9mV7k-r4YbJdvaUjeVAuAHaLK?rs=1&pid=ImgDetMain",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Tomás Eloy Martínez.",
        "publishedDate": "2003",
        "genre": "Drama",
        "summary": "Santa Evita es una obra representativa de Tomás Eloy Martínez que explora las complejidades humanas y sociales.",
        "quotes": [
            "Todo lo que realmente importa sucede en secreto.",
            "Cada quien es dueño de su propio destino.",
            "Nada tiene sentido si no se vive con pasión."
        ]
    },
    {
        "title": "Pantaleón y las visitadoras",
        "author": "Mario Vargas Llosa",
        "coverUrl": "https://imagessl2.casadellibro.com/a/l/t7/72/9788466318372.jpg",
        "synopsis": "Una obra destacada de la literatura en español, escrita por Mario Vargas Llosa.",
        "publishedDate": "1986",
        "genre": "Ciencia ficción",
        "summary": "Pantaleón y las visitadoras es una obra representativa de Mario Vargas Llosa que explora las complejidades humanas y sociales.",
        "quotes": [
            "Todo lo que realmente importa sucede en secreto.",
            "Nada tiene sentido si no se vive con pasión.",
            "La vida no es la que uno vivió, sino la que uno recuerda."
        ]
    }

];
// Cuando todo el DOM esté cargado, salen los libros
document.addEventListener('DOMContentLoaded', () => {
    const contenedorLibros = document.getElementById('book-list');
    pintarTarjetas(contenedorLibros);
});

// Creo cada tarjeta del libro usando los datos y las agrego al contenedor
function pintarTarjetas(contenedor) {
    for (const libro of bookData) {
        const tarjeta = document.createElement('book-card');
        tarjeta.setAttribute('coverUrl', libro.coverUrl);
        tarjeta.setAttribute('title', libro.title);
        tarjeta.setAttribute('author', libro.author);
        tarjeta.setAttribute('synopsis', libro.synopsis);

        tarjeta.addEventListener('bookSelected', () => {
            mostrarDetalles(libro);
        });

        contenedor.appendChild(tarjeta);
    }
}

// Aquí creo la sección con los detalles del libro seleccionado
function mostrarDetalles(libro) {
    const detalle = document.createElement('book-detail');
    detalle.setAttribute('title', libro.title);
    detalle.setAttribute('author', libro.author);
    detalle.setAttribute('coverUrl', libro.coverUrl);
    detalle.setAttribute('publishedDate', libro.publishedDate);
    detalle.setAttribute('genre', libro.genre);
    detalle.setAttribute('summary', libro.summary);
    detalle.setAttribute('quotes', JSON.stringify(libro.quotes)); // Lo paso como string para poder mandarlo por atributo
}
