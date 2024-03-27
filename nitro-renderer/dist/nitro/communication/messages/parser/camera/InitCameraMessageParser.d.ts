import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class InitCameraMessageParser implements IMessageParser {
    private _creditPrice;
    private _ducketPrice;
    private _publishDucketPrice;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get creditPrice(): number;
    get ducketPrice(): number;
    get publishDucketPrice(): number;
}
