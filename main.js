const args = require('args')
const runner = require('./out/index')
const fs = require('fs')

args
    .option('source', 'Le dossier où sont stockés les fichiers récupérés sur le portail Open Data SNCF ou Gouv.fr.', __dirname + '/data')
    .option('format', 'Le format du fichier devant être créé : JSON ou GEOJSON', 'json')
    .option('directory', 'Le dossier de destination', __dirname + '/public')
    .option('name', 'Le nom du fichier à enregistrer', "file")
    .command('save', 'Enregistre le fichier généré', save, ['s'])

const flags = args.parse(process.argv)

function save(name, sub, options) {
    if (options.format === 'json') {
        fs.writeFileSync(`${options.directory}/${options.name}.${options.format}`, JSON.stringify(runner.run(options.source, 'json')))
    }
    if (options.format === 'geojson') {
        fs.writeFileSync(`${options.directory}/${options.name}.${options.format}`, JSON.stringify(runner.run(options.source, 'geojson')))
    }
}

if (flags.format && ['json', 'geojson'].indexOf(flags.format) === -1) {
    args.showHelp()
}