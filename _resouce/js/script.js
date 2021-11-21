L.Icon.Default.imagePath = 'img/icon/';

const lat = 53.68;
const lng = 23.81;

const maps = {};

const createMap = (letter, tiles, name) => {
    const map = L.map(`map-${letter}`, {
        center: [lat, lng],
        zoom: 14,
        zoomControl: true,
        layers: [
            new L.tileLayer(tiles, {
                attribution: name
            }),
            L.centerCross(),
        ]
    });

    maps[letter] = map;

    return map;
}

const mapA = createMap('a', 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 'OpenStreetMap');
createMap('b', 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 'Esri');
createMap('c', 'https://mapwarper.net/maps/tile/60517/{z}/{x}/{y}.png', '1941-07-24');
createMap('d', 'https://mapwarper.net/mosaics/tile/1471/{z}/{x}/{y}.png', '1944-07-19');
createMap('e', 'https://mapwarper.net/mosaics/tile/1469/{z}/{x}/{y}.png', 'GX929 A');
createMap('f', 'https://mapwarper.net/mosaics/tile/1468/{z}/{x}/{y}.png', 'GX929 B');
createMap('g', 'https://mapwarper.net/mosaics/tile/1467/{z}/{x}/{y}.png', '1944-09-16');
createMap('h', 'https://mapwarper.net/mosaics/tile/1472/{z}/{x}/{y}.png', '1944-12-20');

L.control.scale({
    imperial: false,
    maxWidth: 300
}).addTo(mapA);

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

letters.forEach(x => letters.forEach(y => x !== y && maps[x].sync(maps[y])));
