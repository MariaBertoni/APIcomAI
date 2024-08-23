document.addEventListener('DOMContentLoaded', () => {
  const historiaDiv = document.getElementById('historia')
  const historia = JSON.parse(localStorage.getItem('historia'))

  if (historia) {
      const formattedText = historia.map(paragraph => `<p>${paragraph.replace('## ', '')}</p>`).join('')
      historiaDiv.innerHTML = formattedText
  } else {
      historiaDiv.innerHTML = '<p>Não foi possível carregar a história.</p>'
  }
})