import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class AvatarEffectSelectedParser implements IMessageParser {
    private _type;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get type(): number;
}
