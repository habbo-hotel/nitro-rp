import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CompetitionRoomsData } from './utils';
export declare class CompetitionRoomsDataMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): CompetitionRoomsData;
}
