document.addEventListener('DOMContentLoaded', () => {
    initEditor();
});

let draggedElement = null;
let boxes = [];
let currentBox = 0;

// Initialize the editor
function initEditor() {
    const box = document.querySelector('.box');
    boxes.push(box);
    makeDraggable(document.querySelectorAll('.box-row, .box-column'));
    initPopups();
}

// Initialize popups
function initPopups() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
}

// Function to open properties popup
function openPropertiesPopup() {
    document.getElementById('properties-popup').style.display = 'block';
}

// Function to open global properties popup
function openGlobalPropertiesPopup() {
    document.getElementById('global-properties-popup').style.display = 'block';
}

// Function to close properties popup
function closePropertiesPopup() {
    document.getElementById('properties-popup').style.display = 'none';
}

// Function to close global properties popup
function closeGlobalPropertiesPopup() {
    document.getElementById('global-properties-popup').style.display = 'none';
}

// Function to insert a row
function insertRow() {
    const box = boxes[currentBox];
    const row = document.createElement('div');
    row.className = 'box-row editable';
    row.innerHTML = '<div class="placeholder-text">Row Placeholder</div>';
    box.appendChild(row);
    makeDraggable([row]);
    closePopup();
}

// Function to insert a column
function insertColumn() {
    const box = boxes[currentBox];
    const column = document.createElement('div');
    column.className = 'box-column editable';
    column.innerHTML = '<div class="placeholder-text">Column Placeholder</div>';
    box.appendChild(column);
    makeDraggable([column]);
    closePopup();
}

// Function to apply global properties
function applyGlobalProperties() {
    const padding = document.getElementById('padding').value;
    boxes.forEach(box => {
        box.style.padding = padding;
    });
    closeGlobalPropertiesPopup();
}

// Function to apply box properties
function applyBoxProperties() {
    const box = boxes[currentBox];
    box.style.width = document.getElementById('box-width').value;
    box.style.height = document.getElementById('box-height').value;
    box.style.backgroundColor = document.getElementById('box-bg-color').value;
    closePropertiesPopup();
}

// Function to save the current state
function save() {
    const content = document.getElementById('live-preview').innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'page.html';
    link.click();
}

// Function to make an element draggable
function makeDraggable(elements) {
    elements.forEach(element => {
        element.addEventListener('mousedown', (e) => {
            e.preventDefault();
            draggedElement = element;
            let startX = e.clientX, startY = e.clientY;
            let startLeft = parseInt(window.getComputedStyle(element).left, 10) || 0;
            let startTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
            document.addEventListener('mousemove', doDrag);
            document.addEventListener('mouseup', stopDrag);

            function doDrag(e) {
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                element.style.left = `${Math.min(window.innerWidth - element.clientWidth, Math.max(0, startLeft + dx))}px`;
                element.style.top = `${Math.min(window.innerHeight - element.clientHeight, Math.max(0, startTop + dy))}px`;
            }

            function stopDrag() {
                document.removeEventListener('mousemove', doDrag);
                document.removeEventListener('mouseup', stopDrag);
                draggedElement = null;
            }
        });
    });
}

// Function to handle row or column insertion and snapping
function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const box = boxes[currentBox];
    let element;

    if (data === 'row') {
        element = document.createElement('div');
        element.className = 'box-row editable';
        element.innerHTML = '<div class="placeholder-text">Row Placeholder</div>';
    } else if (data === 'column') {
        element = document.createElement('div');
        element.className = 'box-column editable';
        element.innerHTML = '<div class="placeholder-text">Column Placeholder</div>';
    }

    if (element) {
        box.appendChild(element);
        makeDraggable([element]);
    }
}

// Function to allow drop
function allowDrop(event) {
    event.preventDefault();
}

// Function to open template selection
function openTemplateSelection() {
    const templatePopup = document.getElementById('template-popup');
    templatePopup.style.display = 'block';
    const templatePreview = document.getElementById('template-preview');
    templatePreview.innerHTML = '';

    const previewBox = document.createElement('div');
    previewBox.className = 'template-preview-box';

    templatePreview.appendChild(previewBox);
}

// Function to close the popup
function closePopup() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
}

// Function to update the properties of an element
function updateElementProperties(element, properties) {
    Object.assign(element.style, properties);
}

// Initialize context menu for rows and columns
function initContextMenu() {
    document.querySelectorAll('.box-row, .box-column').forEach(el => {
        el.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            // Show context menu (implement as needed)
        });
    });
}

// Function to insert template from preview into the main box
function insertTemplate() {
    const templatePreview = document.getElementById('template-preview');
    const elements = templatePreview.querySelectorAll('.template-element');
    const box = boxes[currentBox];

    elements.forEach(element => {
        const clone = element.cloneNode(true);
        clone.classList.remove('template-element');
        box.appendChild(clone);
        makeDraggable([clone]);
    });

    closePopup();
}

// Function to add a row to the template preview
function addRowToPreview() {
    const previewBox = document.querySelector('.template-preview-box');
    const row = document.createElement('div');
    row.className = 'template-row template-element';
    row.style.top = '0';
    row.style.left = '0';
    row.style.width = '100%';
    row.style.height = '30px';
    previewBox.appendChild(row);
    makeDraggable([row]);
}

// Function to add a column to the template preview
function addColumnToPreview() {
    const previewBox = document.querySelector('.template-preview-box');
    const column = document.createElement('div');
    column.className = 'template-column template-element';
    column.style.top = '0';
    column.style.left = '0';
    column.style.width = '30px';
    column.style.height = '100%';
    previewBox.appendChild(column);
    makeDraggable([column]);
}

// Call this function to initialize context menus
initContextMenu();
