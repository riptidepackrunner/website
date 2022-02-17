const fs = require("fs");
const { createCanvas } = require('canvas')

const colors = [
    '#00FF00',
    '#FFA500',
    '#FF0000'
];

const s = {
    width: 8,
    height: 250,
};

const canvas = createCanvas(s.width, s.height);
const ctx = canvas.getContext('2d');


const gradient = ctx.createLinearGradient(0,0, s.width, s.height);
gradient.addColorStop(0, colors[0]);
gradient.addColorStop(0.5, colors[1]);
gradient.addColorStop(1, colors[2]);
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, s.width, s.height);


fs.writeFileSync('gradient.png', canvas.toBuffer());