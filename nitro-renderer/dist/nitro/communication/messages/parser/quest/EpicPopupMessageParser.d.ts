import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class EpicPopupMessageParser implements IMessageParser {
    private _imageUri;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get imageUri(): string;
}
