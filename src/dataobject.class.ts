import { DataLigne } from "./dataligne.class";
import { DataForme } from "./dataforme.class";

export class DataObject {
    datasetid: string;
    recordid: string;
    fields: DataLigne | DataForme;
    geometry: GeoJSON.Geometry;
    record_timestamp: string;
}