import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { AvatarEffect } from './AvatarEffect';
export declare class AvatarEffectsParser implements IMessageParser {
    private _effects;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get effects(): AvatarEffect[];
}
