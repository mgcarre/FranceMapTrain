import { Ligne } from "./ligne.class";
import { Feature } from "./feature.class";
import { DataObjectLigne } from "./dataobject.ligne.class";
import { Parser } from "../utils/parser";
import { PointKilometrique } from "./pointkilometrique.class";

export class Injector {
    private codeLigne: string;
    private ligne: Ligne;
    private geometry: GeoJSON.LineString | GeoJSON.MultiLineString;
    pks: PointKilometrique[];
    constructor(data: DataObjectLigne, parser: Parser) {
        this.codeLigne = data.fields.code_ligne;
        console.log('Traitement de la ligne:', this.codeLigne)
        this.ligne = new Ligne(data.fields);
        this.geometry = parser.findGeometry(this.codeLigne, data.fields.pkd, data.fields.pkf);
        this.pks = parser.findPks(this.codeLigne, data.fields.pkd, data.fields.pkf);
        this.populate(parser);
    }
    public toJSON(): Ligne {
        this.ligne.geometry = this.geometry;
        return this.ligne;
    }
    public toGeoJSON(zIndex: number = 0): Feature<Ligne> {
        this.ligne.zIndex = zIndex;
        const feature = new Feature(this.ligne.idGaia, this.ligne);
        feature.geometry = this.geometry;
        return feature;
    }

    private populate(parser: Parser): void {
        this.ligne.cantonnements = parser.findCanton(this.codeLigne);
        this.ligne.electrifications = parser.findElect(this.codeLigne);
        this.ligne.equipeeKVB = parser.findKvb(this.codeLigne);
        this.ligne.ligneEquipeeRadio = parser.findRadio(this.codeLigne);
        this.ligne.regimeExploitation = parser.findRegime(this.codeLigne);
        this.ligne.typeLigne = parser.findTypeLigne(this.codeLigne);
        this.ligne.vitesses = parser.findVitesse(this.codeLigne);
    }
}