import { DataObjectForme } from './dataobject.forme.class';
import { DataObjectLigne } from './dataobject.ligne.class';
import { LigneDetail } from './ligne.detail.class';
import * as reader from './reader';

const formes: DataObjectForme[] = JSON.parse(reader.brutFormes);
export const lignes: DataObjectLigne[] = JSON.parse(reader.brutLignes);
const radio: DataObjectLigne[] = JSON.parse(reader.brutRadio);
const kvb: DataObjectLigne[] = JSON.parse(reader.brutKvb);
const typeLigne: DataObjectLigne[] = JSON.parse(reader.brutType);
const canton: DataObjectLigne[] = JSON.parse(reader.brutCantonnement);
const regime: DataObjectLigne[] = JSON.parse(reader.brutRegime);
const vitesse: DataObjectLigne[] = JSON.parse(reader.brutVitesse);
const elect: DataObjectLigne[] = JSON.parse(reader.brutElect);

export const parsePk = (pk: string): number => {
    if (pk.includes('+')) {
        return parseFloat(pk.replace('+', '.'));
    } else {
        return parseFloat(`-${pk.replace('-', '.')}`);
    }
}

export function getRadio(ligne: string): LigneDetail {
    return radio.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
        const detail = new LigneDetail();
        detail.detail = elems.fields.rst;
        detail.from = parsePk(elems.fields.pkd);
        detail.to = parsePk(elems.fields.pkf);
        return detail;
    })[0];
}
export function getKvb(ligne: string): LigneDetail[] {
    return kvb.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
        const detail = new LigneDetail();
        detail.detail = 'Ligne équipée de KVB';
        detail.from = parsePk(elems.fields.pkd);
        detail.to = parsePk(elems.fields.pkf);
        return detail;
    });
}
export function getTypeLigne(ligne: string): LigneDetail[] {
    return typeLigne.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
        const detail = new LigneDetail();
        detail.detail = elems.fields.type_ligne;
        detail.from = parsePk(elems.fields.pkd);
        detail.to = parsePk(elems.fields.pkf);
        return detail;
    });
}
export function getCanton(ligne: string): LigneDetail[] {
    return canton.filter(lignes => lignes.fields.code_ligne.toString() === ligne).map(elems => {
        const detail = new LigneDetail();
        detail.detail = elems.fields.libelle;
        detail.from = parsePk(elems.fields.pkd);
        detail.to = parsePk(elems.fields.pkf);
        return detail;
    });
}
export function getRegime(ligne: string): LigneDetail[] {
    return regime.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
        const detail = new LigneDetail();
        detail.detail = elems.fields.exploitation;
        detail.from = parsePk(elems.fields.pkd);
        detail.to = parsePk(elems.fields.pkf);
        return detail;
    });
}
export function getVitesse(ligne: string): LigneDetail[] {
    return vitesse.filter(lignes => lignes.fields.code_ligne.toString() === ligne).map(elems => {
        const detail = new LigneDetail();
        detail.detail = elems.fields.v_max;
        detail.from = parsePk(elems.fields.pkd);
        detail.to = parsePk(elems.fields.pkf);
        return detail;
    });
}
export function getElect(ligne: string): LigneDetail[] {
    return elect.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
        const detail = new LigneDetail();
        detail.detail = elems.fields.elect;
        detail.from = parsePk(elems.fields.pkd);
        detail.to = parsePk(elems.fields.pkf);
        return detail;
    });
}


const getFormes = (ligne: string, pkd: string, pkf: string): DataObjectForme[] => {
    return formes.filter((forme: DataObjectForme) => forme.fields.code_ligne === ligne && (parsePk(pkd) === parsePk(forme.fields.pk_debut_r) || parsePk(pkf) === parsePk(forme.fields.pk_fin_r)));
}

export const lookUpGeom = (ligne: string, pkd: string, pkf: string): GeoJSON.LineString | GeoJSON.MultiLineString => {
    const formeLignes = getFormes(ligne, pkd, pkf);
    if (formeLignes.length > 0) {
        const forme = formeLignes[0].fields.geo_shape
        forme.coordinates.map((coords: number[]) => {
            if (coords.length === 3) {
                return coords.pop()
            }
            return coords
        })
        return forme;
    } else {
        return null
    }
}