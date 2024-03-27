import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class RoomRightsParser implements IMessageParser {
    private _controllerLevel;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get controllerLevel(): number;
}
