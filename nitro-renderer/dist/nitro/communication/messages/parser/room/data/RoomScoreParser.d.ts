import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomScoreParser implements IMessageParser {
    private _totalLikes;
    private _canLike;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get totalLikes(): number;
    get canLike(): boolean;
}
