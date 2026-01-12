function addTask() {
    const input = document.getElementById('taskInput');
    const priority = document.getElementById('priorityInput');
    const list = document.getElementById('taskList');
    
    if (input.value.trim() === "") {
        alert("Escribe una tarea");
        return;
    }

    const taskCard = document.createElement('div');
    taskCard.className = 'card';

    // Usamos tu estructura de tres círculos y card__content
    taskCard.innerHTML = `
        <div class="tools">
            <div class="circle"><span class="red box"></span></div>
            <div class="circle"><span class="yellow box"></span></div>
            <div class="circle"><span class="green box"></span></div>
            <span class="window-title">Prioridad: ${priority.value}</span>
        </div>
        <div class="card__content">
            <div class="contact-info">
                <h3 class="task-text">${input.value}</h3>
                <p>Estado: Pendiente</p>
            </div>
            <div class="card__actions">
                <button onclick="editTask(this)" class="action-btn" title="Editar">✏️</button>
                <button onclick="this.closest('.card').remove()" class="action-btn" title="Eliminar">🗑️</button>
            </div>
        </div>
    `;

    list.appendChild(taskCard);
    input.value = "";
    input.focus();
}

// Función para EDITAR (Requisito Punto 7)
function editTask(button) {
    const card = button.closest('.card');
    const taskText = card.querySelector('.task-text');
    const newText = prompt("Edita tu tarea:", taskText.innerText);
    
    if (newText !== null && newText.trim() !== "") {
        taskText.innerText = newText;
    }
}