import { Point } from "geojson";
import { PointKilometriqueProps } from "./pointkilometriqueprops.class";

export class PointKilometrique implements GeoJSON.Feature {
    type: "Feature";
    geometry: Point;
    id?: string | number;
    properties: PointKilometriqueProps;
    constructor() {
        this.type = "Feature";
    }
}