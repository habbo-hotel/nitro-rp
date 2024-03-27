import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MysteryBoxKeysParser implements IMessageParser {
    private _boxColor;
    private _keyColor;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get boxColor(): string;
    get keyColor(): string;
}
