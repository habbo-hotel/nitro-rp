import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomPollDataParser implements IMessageParser {
    private _question;
    private _choices;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get question(): string;
    get choices(): string[];
}
