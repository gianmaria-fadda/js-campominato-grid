const cells = 100
console.log('cells', cells, typeof cells);

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < cells; i++) {
    const newCell = document.createElement('div');
    newCell.innerHTML = i + 1;

    newCell.addEventListener('click', function () {
        newCell.classList.toggle('color-light-coral');
    });

    gridContainer.append(newCell);
};