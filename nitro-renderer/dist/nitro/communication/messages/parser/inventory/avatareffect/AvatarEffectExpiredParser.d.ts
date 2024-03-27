import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class AvatarEffectExpiredParser implements IMessageParser {
    private _type;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get type(): number;
}
