import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ShowEnforceRoomCategoryDialogParser implements IMessageParser {
    private _selectionType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get selectionType(): number;
}
