let fields = [
    null,
    'circle',
    null,
    null,
    null,
    null,
    null,
    null,
    'cross',
];

function init() {
    render();
}

function render() {
    const contentDiv = document.getElementById('content');

    // Generate table HTML
    let tableHtml = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol = generateCircleSVG();
            } else if (fields[index] === 'cross') {
                symbol = generateCrossSVG();
            }
            tableHtml += `<td>${symbol}</td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';

    // Set table HTML to contentDiv
    contentDiv.innerHTML = tableHtml;
}


function generateCircleSVG() {
    const color = '#00B0EF';
    const width = 70;
    const height = 70;

    return `<svg width="${width}" height="${height}">
              <circle cx="35" cy="35" r="30" stroke="${color}" stroke-width="5" fill="none">
                <animate attributeName="stroke-dasharray" from="0 188.5" to="188.5 0" dur="0.5s" fill="freeze" />
              </circle>
            </svg>`;
}

function generateCrossSVG() {
    const color = '#FFC000';
    const width = 70;
    const height = 70;

    // Länge der Arme des Kreuzes (kann nach Bedarf angepasst werden)
    const armLength = 25;

    return `<svg width="${width}" height="${height}">
              <line x1="${width / 2 - armLength}" y1="${height / 2 - armLength}" x2="${width / 2 + armLength}" y2="${height / 2 + armLength}" stroke="${color}" stroke-width="5">
                <animate attributeName="stroke-dasharray" from="0 ${2 * armLength}" to="${2 * armLength} 0" dur="0.2s" fill="freeze" />
              </line>
              <line x1="${width / 2 + armLength}" y1="${height / 2 - armLength}" x2="${width / 2 - armLength}" y2="${height / 2 + armLength}" stroke="${color}" stroke-width="5">
                <animate attributeName="stroke-dasharray" from="0 ${2 * armLength}" to="${2 * armLength} 0" dur="0.5s" fill="freeze" />
              </line>
            </svg>`;
}


