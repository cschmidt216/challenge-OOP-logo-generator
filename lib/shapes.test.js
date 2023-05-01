function build(text, textColor, shape, shapeColor) {
  // Define the dimensions of the SVG graphic
  const width = 300;
  const height = 200;

  // Create the SVG graphic using the user's input
  let svg = `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;

  switch (shape) {
    case 'circle':
      svg += `<circle cx="${width / 2}" cy="${height / 2}" r="${width / 4}" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      svg += `<polygon points="${width / 2},${height / 4} ${width / 4},${height * 3 / 4} ${width * 3 / 4},${height * 3 / 4}" fill="${shapeColor}" />`;
      break;
    case 'square':
      svg += `<rect x="${width / 4}" y="${height / 4}" width="${width / 2}" height="${height / 2}" fill="${shapeColor}" />`;
      break;
  }

  svg += `<text x="${width / 2}" y="${height / 2}" text-anchor="middle" dominant-baseline="middle" font-size="${width / 2}" fill="${textColor}">${text}</text></svg>`;

  return svg;
}


describe('build', () => {
  it('should generate a square', () => {
    const svg = build('square test', '#000', 'square', '#fff');
    expect(svg).toContain('<rect');
    expect(svg).not.toContain('<circle');
    expect(svg).not.toContain('<polygon');
  });

  it('should generate a triangle', () => {
    const svg = build('triangle test', '#000', 'triangle', '#fff');
    expect(svg).toContain('<polygon');
    expect(svg).not.toContain('<circle');
    expect(svg).not.toContain('<rect');
  });

  it('should generate a circle', () => {
    const svg = build('circle test', '#000', 'circle', '#fff');
    expect(svg).toContain('<circle');
    expect(svg).not.toContain('<polygon');
    expect(svg).not.toContain('<rect');
  });
});