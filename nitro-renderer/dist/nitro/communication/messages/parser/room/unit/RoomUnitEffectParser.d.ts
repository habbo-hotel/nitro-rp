import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitEffectParser implements IMessageParser {
    private _unitId;
    private _effectId;
    private _delay;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
    get effectId(): number;
    get delay(): number;
}
