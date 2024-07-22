const cells = 100
console.log('cells', cells, typeof cells);

document.createElement('div')

for (let i = 0; i < cells; i++) {
    const element = document.createElement('div');
    element.innerHTML = i + 1;

    document.getElementById('grid-container').append(element)
}
