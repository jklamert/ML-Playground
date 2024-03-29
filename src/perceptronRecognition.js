class ScatterGraph {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.xMin = 0;
    this.yMin = 0;
    this.xMax = this.canvas.width;
    this.yMax = this.canvas.height;
  }

  drawLine(x0, y0, x, y, color) {
    this.ctx.moveTo(x0, y0);
    this.ctx.lineTo(x, y);
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
  }

  transformXY() {
    this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
  }

  drawPoints(n, xArr, yArr, color, radius = 3) {
    for (let i = 0; i < n; i++) {
      this.ctx.fillStyle = color;
      this.ctx.beginPath();
      this.ctx.ellipse(xArr[i], yArr[i], radius, radius, 0, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}

const graph = new ScatterGraph();
graph.transformXY();
const xMax = graph.xMax;
const yMax = graph.yMax;
const xMin = graph.xMin;
const yMin = graph.yMin;

// Create Random XY Points
const numPoints = 500;
const xPoints = [];
const yPoints = [];
for (let i = 0; i < numPoints; i++) {
  xPoints[i] = Math.random() * xMax;
  yPoints[i] = Math.random() * yMax;
}

// Line Function
function f(x) {
  return x * 1.3 + 10;
}

console.debug(graph);

graph.drawPoints(numPoints, xPoints, yPoints, "blue");
graph.drawLine(xMin, f(xMin), xMax, f(xMax), "red");

const inputs = [];
for (let count = 0; count < numPoints; count++) {
  const x = xPoints[count];
  const y = yPoints[count];
  const lineY = f(x);
  inputs.push(y > lineY ? 1 : 0);
}

for (let count = 0; count < numPoints; count++) {
  const x = xPoints[count];
  const y = yPoints[count];
  const answer = inputs[count];
  graph.drawPoints(1, [x], [y], answer === 1 ? "black" : "blue");
}
