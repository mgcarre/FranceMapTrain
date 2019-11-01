import { Ligne } from "./ligne.class";

export class Feature implements GeoJSON.Feature {
    type: "Feature";
    geometry: GeoJSON.LineString | GeoJSON.MultiLineString;
    id: string;
    properties: Ligne;
}