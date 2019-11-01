import * as fs from 'fs';

const checkFileIsInDir = (file: string) => {
    const files = fs.readdirSync('./data', 'utf8')
    const required = [
        'formes-des-lignes-du-rfn.json',
        'lignes-equipees-de-kvb.json',
        'lignes-equipees-de-liaison-radio-sol-train.json',
        'lignes-par-statut.json',
        'lignes-par-type.json',
        'liste-des-lignes-electrifiees.json',
        'mode-de-cantonnement-des-lignes.json',
        'regime-dexploitation-des-lignes.json',
        'vitesse-maximale-nominale-sur-ligne.json'
    ];

    const inDir = files.includes(file);
    if (!inDir) {
        throw new Error(`Le fichier ${file} est absent du dossier './data'`)
    }
    return inDir;
}

export const brutFormes: string = checkFileIsInDir('formes-des-lignes-du-rfn.json') ? fs.readFileSync('./data/formes-des-lignes-du-rfn.json', 'utf8') : null;
export const brutLignes: string = checkFileIsInDir('lignes-par-statut.json') ? fs.readFileSync('./data/lignes-par-statut.json', 'utf8') : null;
export const brutRadio: string = checkFileIsInDir('lignes-equipees-de-liaison-radio-sol-train.json') ? fs.readFileSync('./data/lignes-equipees-de-liaison-radio-sol-train.json', 'utf8') : null;
export const brutKvb: string = checkFileIsInDir('lignes-equipees-de-kvb.json') ? fs.readFileSync('./data/lignes-equipees-de-kvb.json', 'utf8') : null;
export const brutType: string = checkFileIsInDir('lignes-par-type.json') ? fs.readFileSync('./data/lignes-par-type.json', 'utf8') : null;
export const brutCantonnement: string = checkFileIsInDir('mode-de-cantonnement-des-lignes.json') ? fs.readFileSync('./data/mode-de-cantonnement-des-lignes.json', 'utf8') : null;
export const brutRegime: string = checkFileIsInDir('regime-dexploitation-des-lignes.json') ? fs.readFileSync('./data/regime-dexploitation-des-lignes.json', 'utf8') : null;
export const brutVitesse: string = checkFileIsInDir('vitesse-maximale-nominale-sur-ligne.json') ? fs.readFileSync('./data/vitesse-maximale-nominale-sur-ligne.json', 'utf8') : null;
export const brutElect: string = checkFileIsInDir('liste-des-lignes-electrifiees.json') ? fs.readFileSync('./data/liste-des-lignes-electrifiees.json', 'utf8') : null;