import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class AvatarEffectAddedParser implements IMessageParser {
    private _type;
    private _subType;
    private _duration;
    private _permanent;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get type(): number;
    get subType(): number;
    get duration(): number;
    get isPermanent(): boolean;
}
