import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class BuildersClubFurniCountMessageParser implements IMessageParser {
    private _furniCount;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get furniCount(): number;
}
