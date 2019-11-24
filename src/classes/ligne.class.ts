import { LigneDetail } from "./ligne.detail.class";
import { DataLigne } from "./dataligne.class";

enum EStatuts {
    "Déclassée vendue",
    "Exploitée",
    "Déclassée non vendue",
    "Transférée en voie de service",
    "Neutralisée",
    "Fermée non déposée (Plus utilisable)",
    "Fermée et déposée(Plus utilisable)",
    "Fermée",
    "Retranchée(Plus utilisable)",
    "Fermée avec maintien en place de la voie",
    "Fermée et mise à disposition de tiers",
    "Projet",
    "Neutralisée et conservée pour les besoins de la Défense"
}
export class Ligne {
    codeLigne: number;
    pkDebut: number;
    pkFin: number;
    statut: string;
    nomLigne: string;
    troncon: number;
    idGaia: string;
    geometry?: GeoJSON.LineString | GeoJSON.MultiLineString;
    name?: string;
    vitesses?: LigneDetail[];
    cantonnements?: LigneDetail[];
    electrifications?: LigneDetail[];
    equipeeKVB?: LigneDetail[];
    typeLigne?: LigneDetail[];
    ligneEquipeeRadio?: LigneDetail;
    regimeExploitation?: LigneDetail[];
    zIndex?: number;
    licence = 'ODBL';
    source = 'Portail Open Data SNCF : https://data.sncf.com/pages/cgu/';

    constructor(ligne: DataLigne) {
        this.codeLigne = parseInt(ligne.code_ligne);
        this.idGaia = ligne.idgaia;
        this.nomLigne = ligne.lib_ligne;
        this.statut = ligne.statut;
        this.troncon = parseInt(ligne.rg_troncon);
    }
}