export class Feature<Ligne> implements GeoJSON.Feature {
    type: "Feature";
    geometry: GeoJSON.LineString | GeoJSON.MultiLineString;
    id: string;
    properties: Ligne;

    constructor(id: string, ligne: Ligne) {
        this.type = 'Feature';
        this.id = id;
        this.properties = ligne;
    }
}