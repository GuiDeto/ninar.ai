// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate an array of 20 random colors
const colors = Array.from({ length: 20 }, () => getRandomColor());

// Configurable grid size, default is 5x5
const gridSize = 10;

// Prepare the data for squares with initial random colors
const squaresData = Array.from({ length: gridSize * gridSize }, (_, i) => ({ id: i, color: colors[i % colors.length] }));

// Create a grid of squares using D3.js
const grid = d3.select('#grid')
    .classed('container', true)
    .selectAll('.square')
    .data(squaresData)
    .enter()
    .append('div')
    .classed('square', true)
    .style('background-color', d => d.color);

// Compute the size of the squares based on the window size
function setSquareSize() {
    const containerWidth = document.getElementById('grid').offsetWidth;
    const squareSize = (containerWidth - (20 * (gridSize + 1))) / gridSize;

    d3.selectAll('.square')
        .style('width', `${squareSize}px`)
        .style('height', `${squareSize}px`);
}

// Initial square size setup
setSquareSize();

// Update the size of the squares when the window is resized
window.addEventListener('resize', setSquareSize);

// Function to get a random integer up to a maximum value
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Main function that implements the step logic
function step() {
    if (squaresData.length <= 1) return;

    const idx = getRandomInt(squaresData.length);
    const square = squaresData[idx];

    const adjacentIdx = getAdjacentIdx(idx);
    if (adjacentIdx == null) return;

    const adjacentSquare = squaresData[adjacentIdx];

    // Transition color
    d3.select(grid._groups[0][adjacentIdx])
        .transition()
        .style('background-color', square.color)
        .on('end', () => {
            // Remove squares after transition
            // squaresData = squaresData.filter(d => d.id !== square.id && d.id !== adjacentSquare.id);
            grid.data(squaresData).exit().remove();
        });
}

// Function to get a random adjacent index of a square
function getAdjacentIdx(idx) {
    const top = idx - gridSize;
    const bottom = idx + gridSize;
    const left = idx % gridSize > 0 ? idx - 1 : null;
    const right = idx % gridSize < gridSize - 1 ? idx + 1 : null;

    const possibleAdjacents = [top, bottom, left, right].filter(i => i >= 0 && i < squaresData.length);
    if (possibleAdjacents.length === 0) return null;

    return possibleAdjacents[getRandomInt(possibleAdjacents.length)];
}

// Run step every 2 seconds
setInterval(step, 10);