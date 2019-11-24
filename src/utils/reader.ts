import { readdirSync, readFileSync, read } from 'fs';
import { DataObjectForme } from '../classes/dataobject.forme.class';
import { DataObjectLigne } from '../classes/dataobject.ligne.class';
import { Utils } from './utils';

export class Reader {
    // données brutes
    private Pformes: string;
    formes: DataObjectForme[];
    private Pkvb: string;
    kvb: DataObjectLigne[];
    private Pradio: string;
    radio: DataObjectLigne[];
    private Plignes: string;
    lignes: DataObjectLigne[];
    private Ptype: string;
    type: DataObjectLigne[];
    private Pelectrification: string;
    electrification: DataObjectLigne[];
    private Pcantonnement: string;
    cantonnement: DataObjectLigne[];
    private Pregime: string;
    regime: DataObjectLigne[];
    private Pvitesse: string;
    vitesse: DataObjectLigne[];
    // donnees systeme
    private files: string[];
    private directory: string;
    private required = [
        'formes-des-lignes-du-rfn.json',
        'lignes-equipees-de-kvb.json',
        'lignes-equipees-de-liaison-radio-sol-train.json',
        'lignes-par-statut.json',
        'lignes-par-type.json',
        'liste-des-lignes-electrifiees.json',
        'mode-de-cantonnement-des-lignes.json',
        'regime-dexploitation-des-lignes.json',
        'vitesse-maximale-nominale-sur-ligne.json'
    ];
    constructor(directory: string) {
        this.directory = directory;
        this.files = readdirSync(this.directory, 'utf-8');
        this.populate();
        this.parse();
    }
    getForme(ligne: string, pkd: string, pkf: string): DataObjectForme[] {
        return this.formes.filter((forme: DataObjectForme) => forme.fields.code_ligne === ligne && (Utils.parsePk(pkd) === Utils.parsePk(forme.fields.pk_debut_r) || Utils.parsePk(pkf) === Utils.parsePk(forme.fields.pk_fin_r)));
    }
    private getFormes(): DataObjectForme[] {
        return JSON.parse(this.Pformes);
    }
    private getKvb(): DataObjectLigne[] {
        return JSON.parse(this.Pkvb);
    }
    private getRadio(): DataObjectLigne[] {
        return JSON.parse(this.Pradio);
    }
    private getLignes(): DataObjectLigne[] {
        return JSON.parse(this.Plignes);
    }
    private getType(): DataObjectLigne[] {
        return JSON.parse(this.Ptype);
    }
    private getElect(): DataObjectLigne[] {
        return JSON.parse(this.Pelectrification);
    }
    private getCanton(): DataObjectLigne[] {
        return JSON.parse(this.Pcantonnement);
    }
    private getRegime(): DataObjectLigne[] {
        return JSON.parse(this.Pregime);
    }
    private getVitesse(): DataObjectLigne[] {
        return JSON.parse(this.Pvitesse);
    }
    private populate(): void {
        this.Pformes = this.readFile(this.required[0]);
        this.Pkvb = this.readFile(this.required[1]);
        this.Pradio = this.readFile(this.required[2]);
        this.Plignes = this.readFile(this.required[3]);
        this.Ptype = this.readFile(this.required[4]);
        this.Pelectrification = this.readFile(this.required[5]);
        this.Pcantonnement = this.readFile(this.required[6]);
        this.Pregime = this.readFile(this.required[7]);
        this.Pvitesse = this.readFile(this.required[8]);
    }
    private parse(): void {
        this.formes = this.getFormes();
        this.kvb = this.getKvb();
        this.cantonnement = this.getCanton();
        this.regime = this.getRegime();
        this.vitesse = this.getVitesse();
        this.radio = this.getRadio();
        this.lignes = this.getLignes();
        this.type = this.getType();
        this.electrification = this.getElect();
    }
    private readFile(file: string): string {
        if (this.checkFileIsInDirectory(file)) {
            return readFileSync(`${this.directory}/${file}`, 'utf-8');
        }
        return null;
    }
    private checkFileIsInDirectory(file: string): boolean {
        const inDir = this.files.includes(file);
        if (!inDir) {
            throw new Error(`Le fichier ${file} est absent du dossier ${this.directory}`)
        }
        return inDir;
    }
}