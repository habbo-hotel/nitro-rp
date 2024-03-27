import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MuteAllInRoomParser implements IMessageParser {
    private _isMuted;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isMuted(): boolean;
}
