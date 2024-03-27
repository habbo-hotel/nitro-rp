import { IMessageDataWrapper } from '../../../../../api';
export declare class SellablePetPaletteData {
    private _type;
    private _breedId;
    private _paletteId;
    private _sellable;
    private _rare;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get type(): number;
    get breedId(): number;
    get paletteId(): number;
    get sellable(): boolean;
    get rare(): boolean;
}
