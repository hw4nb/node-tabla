const argv = require('yargs')
  .option('b', {
    alias: 'base',
    demandOption: true,
    type: 'number',
		describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    default: false,
    type: 'boolean',
		describe: 'Muestra la tabla en consola'
  })
	.option('h', {
		alias: 'hasta',
		type: 'number',
		default: 10,
		describe: 'Es el numero hasta donde quieres la tabla'
	})
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base tiene que ser un numero'
    }
		if (isNaN(argv.hasta)) {
			throw 'El limite tiene que ser un numero'
		}
    return true
  }).argv

module.exports = argv;