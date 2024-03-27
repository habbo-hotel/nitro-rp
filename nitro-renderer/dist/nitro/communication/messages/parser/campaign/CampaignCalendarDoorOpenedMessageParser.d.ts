import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CampaignCalendarDoorOpenedMessageParser implements IMessageParser {
    private _doorOpened;
    private _productName;
    private _customImage;
    private _furnitureClassName;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get doorOpened(): boolean;
    get productName(): string;
    get customImage(): string;
    get furnitureClassName(): string;
}
