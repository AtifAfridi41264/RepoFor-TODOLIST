 

   const addButton = document.getElementById('addList');
    const removeButton = document.getElementById('removeList');
    const inputField = document.querySelector('.inputForData');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', function() {
        const inputValue = inputField.value.trim();
        if (inputValue !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = inputValue;
            todoList.appendChild(listItem);
            inputField.value = ''; // Clear the input field
        }
    });

    removeButton.addEventListener('click', function() {
        const listItems = todoList.querySelectorAll('li');
        if (listItems.length > 0) {
            todoList.removeChild(listItems[listItems.length - 1]);
        }
    });