import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideOnDutyStatusMessageParser implements IMessageParser {
    private _onDuty;
    private _guidesOnDuty;
    private _helpersOnDuty;
    private _guardiansOnDuty;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get onDuty(): boolean;
    get guidesOnDuty(): number;
    get helpersOnDuty(): number;
    get guardiansOnDuty(): number;
}
