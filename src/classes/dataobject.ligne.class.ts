import { DataLigne } from "./dataligne.class";
import { IDataObject } from "../interfaces/dataobject.interface";

export class DataObjectLigne implements IDataObject {
    datasetid: string;
    recordid: string;
    fields: DataLigne;
    geometry: GeoJSON.Geometry;
    record_timestamp: string;
}