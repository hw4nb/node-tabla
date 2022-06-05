const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar, hasta = 10) => {
  try {
    let salida = ''
    let consola = ''

    for (let i = 1; i <= hasta; i++) {
      consola += `${colors.red(base)} ${'x'.brightMagenta} ${colors.cyan(i)} ${'='.brightWhite} ${colors.yellow(base * i)}\n`
      salida += `${base} x ${i} = ${base * i}\n`
    }

    if (listar) {
      console.log('========================='.rainbow)
      console.log(colors.green('      Tabla del:', base))
      console.log('========================='.rainbow)
      console.log(consola)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    return `tabla-${base}.txt`.magenta.bold
  } catch (err) {
    throw err
  }
}

module.exports = {
  crearArchivo,
}
