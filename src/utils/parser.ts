import { Reader } from "./reader";
import { LigneDetail } from "../classes/ligne.detail.class";
import { Utils } from "./utils";
import { PointKilometrique } from "../classes/pointkilometrique.class";

enum FormatType {
    'json',
    'geojson'
}

export class Parser {
    format: FormatType = FormatType.json;
    reader: Reader;
    constructor(reader: Reader) {
        this.reader = reader;
    }
    findRadio(ligne: string): LigneDetail {
        return this.reader.radio.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
            const detail = new LigneDetail();
            detail.detail = elems.fields.rst;
            detail.from = this.parsePk(elems.fields.pkd);
            detail.to = this.parsePk(elems.fields.pkf);
            return detail;
        })[0];
    }
    findKvb(ligne: string): LigneDetail[] {
        return this.reader.kvb.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
            const detail = new LigneDetail();
            detail.detail = 'Ligne équipée de KVB';
            detail.from = this.parsePk(elems.fields.pkd);
            detail.to = this.parsePk(elems.fields.pkf);
            return detail;
        });
    }
    findTypeLigne(ligne: string): LigneDetail[] {
        return this.reader.type.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
            const detail = new LigneDetail();
            detail.detail = elems.fields.type_ligne;
            detail.from = this.parsePk(elems.fields.pkd);
            detail.to = this.parsePk(elems.fields.pkf);
            return detail;
        });
    }
    findCanton(ligne: string): LigneDetail[] {
        return this.reader.cantonnement.filter(lignes => lignes.fields.code_ligne.toString() === ligne).map(elems => {
            const detail = new LigneDetail();
            detail.detail = elems.fields.libelle;
            detail.from = this.parsePk(elems.fields.pkd);
            detail.to = this.parsePk(elems.fields.pkf);
            return detail;
        });
    }
    findRegime(ligne: string): LigneDetail[] {
        return this.reader.regime.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
            const detail = new LigneDetail();
            detail.detail = elems.fields.exploitation;
            detail.from = this.parsePk(elems.fields.pkd);
            detail.to = this.parsePk(elems.fields.pkf);
            return detail;
        });
    }
    findVitesse(ligne: string): LigneDetail[] {
        return this.reader.vitesse.filter(lignes => lignes.fields.code_ligne.toString() === ligne).map(elems => {
            const detail = new LigneDetail();
            detail.detail = elems.fields.v_max;
            detail.from = this.parsePk(elems.fields.pkd);
            detail.to = this.parsePk(elems.fields.pkf);
            return detail;
        });
    }
    findElect(ligne: string): LigneDetail[] {
        return this.reader.electrification.filter(lignes => lignes.fields.code_ligne === ligne).map(elems => {
            const detail = new LigneDetail();
            detail.detail = elems.fields.elect;
            detail.from = this.parsePk(elems.fields.pkd);
            detail.to = this.parsePk(elems.fields.pkf);
            return detail;
        });
    }
    findGeometry(ligne: string, pkd: string, pkf: string): GeoJSON.LineString | GeoJSON.MultiLineString {
        const formeLignes = this.reader.getForme(ligne, pkd, pkf);
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
            return {
                "type": "LineString",
                "coordinates": [
                    [
                        -3.372802734375,
                        46.14178273759234
                    ],
                    [
                        -3.3782958984375,
                        45.91294412737392
                    ]
                ]
            }
        }
    }
    findPks(ligne: string, pkd: string, pkf: string): PointKilometrique[] {
        const formeLignes = this.reader.getForme(ligne, pkd, pkf);

        if (formeLignes && formeLignes.length > 0) {
            const forme = formeLignes[0].fields.geo_shape;
            return forme.coordinates.map(coords => {
                const pk = new PointKilometrique();
                pk.geometry.coordinates = [coords[0], coords[1]];
                pk.properties.ligne = 0;
                pk.properties.valeur = Math.floor(coords[2]) / 1000
                return pk;
            })
        }
    }
    parsePk(pk: string): number {
        return Utils.parsePk(pk);
    }
}