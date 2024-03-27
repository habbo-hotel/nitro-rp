import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class BuildersClubSubscriptionStatusMessageParser implements IMessageParser {
    private _secondsLeft;
    private _furniLimit;
    private _maxFurniLimit;
    private _secondsLeftWithGrace;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get secondsLeft(): number;
    get furniLimit(): number;
    get maxFurniLimit(): number;
    get secondsLeftWithGrace(): number;
}
