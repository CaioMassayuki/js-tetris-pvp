// Função de adicionar GRID no campo de jogo utilizando "lineTo" ao invés do "strokeRect", dessa forma diminui muitos Loops desnecessários mas perde em Qualidade Gráfica em comparação com o "Stroke"
function drawPlayfield() {
  context.strokeStyle = '#fff'
  context.lineWidth = 2
  for (let column = 0; column < canvas.width; column += PIXEL) {
    context.moveTo(column, 0 * PIXEL)
    context.lineTo(column, 20 * PIXEL)
  }
  for (let line = 0; line < canvas.height; line += PIXEL) {
    context.moveTo(0 * PIXEL, line)
    context.lineTo(10 * PIXEL, line)
  }
  context.stroke()
}

// Melhorar performance da rotação de peças criando Matrizes previveis de cada peça