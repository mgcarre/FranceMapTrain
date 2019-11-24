import { IDataObject } from "../interfaces/dataobject.interface";
import { DataForme } from "./dataforme.class";

export class DataObjectForme implements IDataObject {
    datasetid: string;
    recordid: string;
    fields: DataForme;
    geometry: GeoJSON.Geometry;
    record_timestamp: string;
}