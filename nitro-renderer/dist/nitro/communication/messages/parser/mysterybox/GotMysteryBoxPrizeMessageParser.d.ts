import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GotMysteryBoxPrizeMessageParser implements IMessageParser {
    private _contentType;
    private _classId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get contentType(): string;
    get classId(): number;
}
