import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionStartedMessageParser implements IMessageParser {
    private _requesterUserId;
    private _requesterName;
    private _requesterFigure;
    private _guideUserId;
    private _guideName;
    private _guideFigure;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get requesterUserId(): number;
    get requesterName(): string;
    get requesterFigure(): string;
    get guideUserId(): number;
    get guideName(): string;
    get guideFigure(): string;
}
