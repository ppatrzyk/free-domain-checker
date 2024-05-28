
import groupBy from "core-js/actual/array/group-by";
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

let dbPath: string = process.env.DB as string;
let db = await open<sqlite3.Database, sqlite3.Statement>({
    driver: sqlite3.Database,
    filename: dbPath,
    mode: sqlite3.OPEN_READONLY,
})

export interface SynsetRow {
    lemma: string
    synsetid: number
    definition: string
}
export type Synsets = Record<string, Array<SynsetRow>>;

export interface TermRow {
    synsetid: number
    lemma: string
}
export type Terms = Record<string, Array<TermRow>>;

export async function getSynsets(keywords: Array<string>): Promise<Synsets> {
    let params = keywords.map(_ => "?").join(", ");
    let query = `select lemma, synsetid, '[' || pos || '] ' || definition as definition from wordsXsensesXsynsets where lemma in (${params});`
    let rawResult: Array<SynsetRow> = await db.all<Array<SynsetRow>>(query, ...keywords);
    let result: Synsets = groupBy(rawResult, ({ lemma }) => lemma) as unknown as Synsets;
    return result
}

export async function getTerms(synsetids: Array<number>): Promise<Terms> {
    let params = synsetids.map(_ => "?").join(", ");
    let query = `select synsetid, lemma from wordsXsensesXsynsets where synsetid in (${params});`
    let rawResult: Array<TermRow> = await db.all<Array<TermRow>>(query, ...synsetids);
    let result: Terms = groupBy(rawResult, ({ synsetid }) => synsetid) as unknown as Terms;
    return result
}
