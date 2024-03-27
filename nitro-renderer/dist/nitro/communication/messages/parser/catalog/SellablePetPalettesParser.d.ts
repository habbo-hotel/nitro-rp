import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { SellablePetPaletteData } from './SellablePetPaletteData';
export declare class SellablePetPalettesParser implements IMessageParser {
    private _productCode;
    private _palettes;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get productCode(): string;
    get palettes(): SellablePetPaletteData[];
}
