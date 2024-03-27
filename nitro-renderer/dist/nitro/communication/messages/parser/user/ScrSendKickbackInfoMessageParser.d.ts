import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ScrKickbackData } from './ScrKickbackData';
export declare class ScrSendKickbackInfoMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): ScrKickbackData;
}
