import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GroupBadgePartsParser implements IMessageParser {
    private _bases;
    private _symbols;
    private _partColors;
    private _colorsA;
    private _colorsB;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get bases(): Map<number, string[]>;
    get symbols(): Map<number, string[]>;
    get partColors(): Map<number, string>;
    get colorsA(): Map<number, string>;
    get colorsB(): Map<number, string>;
}
