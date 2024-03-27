import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserNameChangeMessageParser implements IMessageParser {
    private _webId;
    private _id;
    private _newName;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get webId(): number;
    get id(): number;
    get newName(): string;
}
