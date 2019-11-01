import { DataObject } from "./dataobject.class";
import { DataForme } from "./dataforme.class";

export class DataObjectForme implements DataObject {
    datasetid: string;
    recordid: string;
    fields: DataForme;
    geometry: GeoJSON.Geometry;
    record_timestamp: string;
}