// Contactos con Java Script Quemados
const contactos = [
    {
        id: 1,
        nombre: "Iverson Maldonado",
        telefono: "5555-0101",
        correo: "iverson.maldonado@example.com",
        direccion: "Zona 10, Ciudad de Guatemala",
        categoria: "Trabajo",
        foto: "/Images/Iverson.jpg"
    },
    {
        id: 2,
        nombre: "Ronald Araujo",
        telefono: "4444-0202",
        correo: "ronald.araujo@example.com",
        direccion: "Zona 15, Guatemala",
        categoria: "Personal",
        foto: "/Images/Araujo.jpg"
    },
    {
        id: 3,
        nombre: "Pedro Gonzalez",
        telefono: "3333-0303",
        correo: "pedro.gonzalez@example.com",
        direccion: "Mixco, Guatemala",
        categoria: "Familia",
        foto: "/Images/Pedri.jpg"
    },
    {
        id: 4,
        nombre: "Lamine Yamal",
        telefono: "2222-0404",
        correo: "lamine.yamal@example.com",
        direccion: "Villa Nueva, Guatemala",
        categoria: "Trabajo",
        foto: "/Images/Yamal.jpg"
    },
    {
        id: 5,
        nombre: "Joan Garcia",
        telefono: "1111-0505",
        correo: "joan.garcia@example.com",
        direccion: "San Lucas, Guatemala",
        categoria: "Personal",
        foto: "/Images/Joan.jpg"
    }
];

// Función para guardar contacto seleccionado y redirigir
function verDetalles(contactoId) {
    localStorage.setItem('contactoSeleccionado', contactoId);
    window.location.href = 'detalles.html';
}

// Función para cargar los contactos en la página principal
function cargarContactos() {
    const grid = document.getElementById('contactGrid');
    if (!grid) return;

    grid.innerHTML = '';

    contactos.forEach(contacto => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const toolsDiv = document.createElement('div');
        toolsDiv.className = 'tools';
        toolsDiv.innerHTML = `
            <div class="circle"><span class="red box"></span></div>
            <div class="circle"><span class="yellow box"></span></div>
            <div class="circle"><span class="green box"></span></div>
            <span class="window-title">Contacto</span>
        `;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'card__content';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'contact-info';
        
        const foto = document.createElement('img');
        foto.src = contacto.foto;
        foto.alt = contacto.nombre;
        foto.className = 'contact-foto';
        
        const nombre = document.createElement('h3');
        nombre.textContent = contacto.nombre;
        
        const telefono = document.createElement('p');
        telefono.textContent = contacto.telefono;
        
        infoDiv.appendChild(foto);
        infoDiv.appendChild(nombre);
        infoDiv.appendChild(telefono);
        
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'card__actions';
        
        const btnLlamar = document.createElement('a');
        btnLlamar.href = `tel:${contacto.telefono}`;
        btnLlamar.className = 'action-btn';
        btnLlamar.title = 'Llamar';
        btnLlamar.textContent = '📞';
        
        const btnMensaje = document.createElement('a');
        btnMensaje.href = `mailto:${contacto.correo}`;
        btnMensaje.className = 'action-btn';
        btnMensaje.title = 'Mensaje';
        btnMensaje.textContent = '💬';
        
        const btnUbicacion = document.createElement('a');
        btnUbicacion.href = '#';
        btnUbicacion.className = 'action-btn';
        btnUbicacion.title = 'Ubicación';
        btnUbicacion.textContent = '📍';
        
        actionsDiv.appendChild(btnLlamar);
        actionsDiv.appendChild(btnMensaje);
        actionsDiv.appendChild(btnUbicacion);
        
        const btnDetalles = document.createElement('button');
        btnDetalles.className = 'btn-view';
        btnDetalles.textContent = 'Ver Detalles';
        btnDetalles.onclick = function() { verDetalles(contacto.id); };
        
        contentDiv.appendChild(infoDiv);
        contentDiv.appendChild(actionsDiv);
        contentDiv.appendChild(btnDetalles);
        
        card.appendChild(toolsDiv);
        card.appendChild(contentDiv);
        
        grid.appendChild(card);
    });
}

// Función para cargar detalles de un contacto específico
function cargarDetalleContacto() {
    const contactoId = localStorage.getItem('contactoSeleccionado');
    
    if (!contactoId) {
        window.location.href = 'contactos.html';
        return;
    }

    const contacto = contactos.find(c => c.id === parseInt(contactoId));
    
    if (!contacto) {
        alert('Contacto no encontrado');
        window.location.href = 'contactos.html';
        return;
    }

    const detalleContainer = document.getElementById('detalleContacto');
    if (detalleContainer) {
        detalleContainer.innerHTML = '';
        
        const infoCenter = document.createElement('div');
        infoCenter.className = 'contact-info detalle-info-center';
        
        const foto = document.createElement('img');
        foto.src = contacto.foto;
        foto.alt = contacto.nombre;
        foto.className = 'detalle-foto';
        
        const nombre = document.createElement('h2');
        nombre.className = 'detalle-nombre';
        nombre.textContent = contacto.nombre;
        
        infoCenter.appendChild(foto);
        infoCenter.appendChild(nombre);
        
        const infoLeft = document.createElement('div');
        infoLeft.className = 'contact-info detalle-info-left';
        
        const campoTelefono = document.createElement('p');
        campoTelefono.className = 'detalle-campo';
        campoTelefono.innerHTML = `<strong class="detalle-label">📞 Teléfono:</strong> ${contacto.telefono}`;
        
        const campoCorreo = document.createElement('p');
        campoCorreo.className = 'detalle-campo';
        campoCorreo.innerHTML = `<strong class="detalle-label">✉️ Correo:</strong> ${contacto.correo}`;
        
        const campoDireccion = document.createElement('p');
        campoDireccion.className = 'detalle-campo';
        campoDireccion.innerHTML = `<strong class="detalle-label">📍 Dirección:</strong> ${contacto.direccion}`;
        
        const campoCategoria = document.createElement('p');
        campoCategoria.className = 'detalle-campo';
        campoCategoria.innerHTML = `<strong class="detalle-label">🏷️ Categoría:</strong> ${contacto.categoria}`;
        
        infoLeft.appendChild(campoTelefono);
        infoLeft.appendChild(campoCorreo);
        infoLeft.appendChild(campoDireccion);
        infoLeft.appendChild(campoCategoria);
        
        const botonesDiv = document.createElement('div');
        botonesDiv.className = 'detalle-botones';
        
        const btnLlamar = document.createElement('a');
        btnLlamar.href = `tel:${contacto.telefono}`;
        btnLlamar.className = 'btn-view';
        btnLlamar.textContent = '📞 Llamar';
        
        const btnEmail = document.createElement('a');
        btnEmail.href = `mailto:${contacto.correo}`;
        btnEmail.className = 'btn-view btn-view-green';
        btnEmail.textContent = '✉️ Email';
        
        botonesDiv.appendChild(btnLlamar);
        botonesDiv.appendChild(btnEmail);
        
        const btnVolver = document.createElement('a');
        btnVolver.href = 'contactos.html';
        btnVolver.className = 'btn-view btn-view-gray';
        btnVolver.textContent = '← Volver a la lista';
        
        detalleContainer.appendChild(infoCenter);
        detalleContainer.appendChild(infoLeft);
        detalleContainer.appendChild(botonesDiv);
        detalleContainer.appendChild(btnVolver);
    }
}

// Función para cargar favoritos
function cargarFavoritos() {
    const grid = document.getElementById('favoritosGrid');
    if (!grid) return;

    const favoritos = contactos.slice(0, 2);

    grid.innerHTML = '';

    favoritos.forEach(contacto => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const toolsDiv = document.createElement('div');
        toolsDiv.className = 'tools';
        toolsDiv.innerHTML = `
            <div class="circle"><span class="red box"></span></div>
            <div class="circle"><span class="yellow box"></span></div>
            <div class="circle"><span class="green box"></span></div>
            <span class="window-title">⭐ Favorito</span>
        `;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'card__content';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'contact-info';
        
        const foto = document.createElement('img');
        foto.src = contacto.foto;
        foto.alt = contacto.nombre;
        foto.className = 'contact-foto';
        
        const nombre = document.createElement('h3');
        nombre.textContent = contacto.nombre;
        
        const categoria = document.createElement('p');
        categoria.textContent = contacto.categoria;
        
        infoDiv.appendChild(foto);
        infoDiv.appendChild(nombre);
        infoDiv.appendChild(categoria);
        
        const btnDetalles = document.createElement('button');
        btnDetalles.className = 'btn-view';
        btnDetalles.textContent = 'Ver Detalles';
        btnDetalles.onclick = function() { verDetalles(contacto.id); };
        
        contentDiv.appendChild(infoDiv);
        contentDiv.appendChild(btnDetalles);
        
        card.appendChild(toolsDiv);
        card.appendChild(contentDiv);
        
        grid.appendChild(card);
    });
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('contactGrid')) {
        cargarContactos();
    }
    
    if (document.getElementById('detalleContacto')) {
        cargarDetalleContacto();
    }
    
    if (document.getElementById('favoritosGrid')) {
        cargarFavoritos();
    }
});