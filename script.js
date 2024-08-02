function calcular() {
    let homens = parseInt(document.getElementById('homens').value);
    let mulheres = parseInt(document.getElementById('mulheres').value);
    let crianças = parseInt(document.getElementById('crianças').value);

    let carnebovina = (homens * 500) + (mulheres * 300) + (crianças * 200);
    let frango = (homens * 200) + (mulheres * 200) + (crianças * 100);
    let linguiça = (homens * 200) + (mulheres * 200) + (crianças * 200);
    let refrigerante = (homens * 300) + (mulheres * 400) + (crianças * 200);
    let cerveja = (homens * 800) + (mulheres * 500);

    let formatWeight = (weight) => weight >= 1000 ? `${(weight / 1000).toFixed(2)} kg` : `${weight} g`;
    let formatVolume = (volume) => volume >= 1000 ? `${(volume / 1000).toFixed(2)} L` : `${volume} ml`;

    let resultado = `
    <h2>Quantidade de Inguedientes Necessários: </h2>
    <p>Carne Bovina: ${formatWeight(carnebovina)}</p>
    <p>Frango: ${formatWeight(frango)}</p>
    <p>Linguiça: ${formatWeight(linguiça)}</p>
    <p>Refrigerante: ${formatVolume(refrigerante)}</p>
    <p>Cerveja: ${formatVolume(cerveja)}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}