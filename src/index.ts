import { Injector } from "./classes/injector.class";
import { Reader } from "./utils/reader";
import { Parser } from "./utils/parser";

export function run(dir: string, format: string): any {
    const r = new Reader(dir);
    const p = new Parser(r);

    if (format !== 'json' && format !== 'geojson') {
        throw new Error('Le format doit être : "json" ou "geojson"')
    }

    if (format === 'json') {
        return (r.lignes.map(ligne => new Injector(ligne, p).toJSON())).sort((a, b) => a.codeLigne - b.codeLigne);
    }
    if (format === 'geojson') {
        const features = (r.lignes.map(ligne => new Injector(ligne, p).toGeoJSON())).sort((a, b) => a.properties.codeLigne - b.properties.codeLigne);
        return { "type": "FeatureCollection", features };
    }
    if (format === 'geojson+pk') {
    }
}