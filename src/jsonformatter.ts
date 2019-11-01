import { Ligne } from "./ligne.class"
import * as common from './common';
import { DataObjectLigne } from './dataobject.ligne.class';

const parsed: Ligne[] = [];

export function run() {
    common.lignes.forEach((l: DataObjectLigne) => {
        const codeLigne = l.fields.code_ligne;
        console.log('Traitement de la ligne:', codeLigne)
        const out = new Ligne();
        out.codeLigne = parseInt(codeLigne);
        out.idGaia = l.fields.idgaia;
        out.nomLigne = l.fields.lib_ligne;
        out.pkDebut = common.parsePk(l.fields.pkd);
        out.pkFin = common.parsePk(l.fields.pkf);
        out.statut = l.fields.statut;
        out.troncon = parseInt(l.fields.rg_troncon);
        out.geometry = common.lookUpGeom(codeLigne, l.fields.pkd, l.fields.pkf, l.fields.rg_troncon);
        out.cantonnements = common.getCanton(codeLigne);
        out.electrifications = common.getElect(codeLigne);
        out.equipeeKVB = common.getKvb(codeLigne);
        out.ligneEquipeeRadio = common.getRadio(codeLigne);
        out.regimeExploitation = common.getRegime(codeLigne);
        out.typeLigne = common.getTypeLigne(codeLigne);
        out.vitesses = common.getVitesse(codeLigne);
        parsed.push(out);
    })
    parsed.sort((a, b) => a.codeLigne - b.codeLigne);
    return parsed;
}