import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CfhSanctionTypeData } from './CfhSanctionTypeData';
export declare class CfhSanctionMessageParser implements IMessageParser {
    private _issueId;
    private _accountId;
    private _sanctionType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get issueId(): number;
    get accountId(): number;
    get sanctionType(): CfhSanctionTypeData;
}
