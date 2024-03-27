import { IMessageDataWrapper } from '../../../../../api';
export declare class PopularTagData {
    private _tagName;
    private _userCount;
    constructor(wrapper: IMessageDataWrapper);
    get tagName(): string;
    get userCount(): number;
}
