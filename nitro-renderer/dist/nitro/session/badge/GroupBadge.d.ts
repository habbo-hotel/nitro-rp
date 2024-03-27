import { GroupBadgePart } from './GroupBadgePart';
export declare class GroupBadge {
    private _code;
    private _parts;
    constructor(code: string);
    get code(): string;
    get parts(): GroupBadgePart[];
}
