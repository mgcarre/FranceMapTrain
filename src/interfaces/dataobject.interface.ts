import { DataLigne } from "../classes/dataligne.class";
import { DataForme } from "../classes/dataforme.class";

export interface IDataObject {
    datasetid: string;
    recordid: string;
    fields: DataLigne | DataForme;
    geometry: GeoJSON.Geometry;
    record_timestamp: string;
}