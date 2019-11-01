const args = require('args')
const json = require('./out/jsonformatter')
const geojson = require('./out/geojsonformatter')
const fs = require('fs')

args
    .option('format', 'Le format du fichier devant être créé : JSON ou GEOJSON', 'json')
    .option('directory', 'Le dossier de destination', __dirname)
    .option('name', 'Le nom du fichier à enregistrer', "file")
    .command('save', 'Enregistre le fichier généré', save, ['s'])

const flags = args.parse(process.argv)

function save(name, sub, options) {
    if (options.format === 'json') {
        fs.writeFileSync(`${options.directory}/${options.name}.${options.format}`, JSON.stringify(json.run()))
    }
    if (options.format === 'geojson') {
        fs.writeFileSync(`${options.directory}/${options.name}.${options.format}`, JSON.stringify(geojson.run()))
    }
}

if (flags.format && ['json', 'geojson'].indexOf(flags.format) === -1) {
    args.showHelp()
}