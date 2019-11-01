import { DataLigne } from "./dataligne.class";
import { DataObject } from "./dataobject.class";

export class DataObjectLigne implements DataObject {
    datasetid: string;
    recordid: string;
    fields: DataLigne;
    geometry: GeoJSON.Geometry;
    record_timestamp: string;
}