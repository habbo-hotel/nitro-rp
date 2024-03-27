import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionAttachedMessageParser implements IMessageParser {
    private _asGuide;
    private _helpRequestType;
    private _helpRequestDescription;
    private _roleSpecificWaitTime;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get asGuide(): boolean;
    get helpRequestType(): number;
    get helpRequestDescription(): string;
    get roleSpecificWaitTime(): number;
}
