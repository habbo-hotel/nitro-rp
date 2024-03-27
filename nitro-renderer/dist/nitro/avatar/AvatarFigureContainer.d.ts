import { IAvatarFigureContainer } from '../../api';
export declare class AvatarFigureContainer implements IAvatarFigureContainer {
    private _parts;
    constructor(figure: string);
    getPartTypeIds(): IterableIterator<string>;
    hasPartType(k: string): boolean;
    getPartSetId(k: string): number;
    getPartColorIds(k: string): number[];
    updatePart(setType: string, partSetId: number, colorIds: number[]): void;
    removePart(k: string): void;
    getFigureString(): string;
    private partSets;
    private parseFigure;
}
