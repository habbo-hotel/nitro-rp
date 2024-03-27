import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomFilterSettingsMessageParser implements IMessageParser {
    private _words;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get words(): string[];
}
