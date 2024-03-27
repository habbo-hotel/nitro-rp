import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class AvatarEffectActivatedParser implements IMessageParser {
    private _type;
    private _duration;
    private _isPermanent;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get type(): number;
    get duration(): number;
    get isPermanent(): boolean;
}
