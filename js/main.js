const region = document.querySelector('#region')
const comuna = document.querySelector('#comuna')

const regionesArray = []

const fetchData = async () => {
  try {
    const res = await fetch('json/regiones.json')
    const { regiones } = await res.json()
    regiones.forEach((reg) => {
      const option = document.createElement('option')
      option.value = reg.region
      option.text = reg.region
      region.appendChild(option)

      regionesArray.push(reg)
    })
  } catch (error) {
    console.log(error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})

region.addEventListener('change', (e) => {
  const regionSeleccionada = e.target.value
  const regionEncontrada = regionesArray.find(
    (reg) => reg.region === regionSeleccionada
  )
  const comunas = regionEncontrada.comunas
  comuna.innerHTML = '<option value="">Seleccione una comuna</option>'
  comunas.forEach((com) => {
    const option = document.createElement('option')
    option.value = com
    option.text = com
    comuna.appendChild(option)
  })
})
