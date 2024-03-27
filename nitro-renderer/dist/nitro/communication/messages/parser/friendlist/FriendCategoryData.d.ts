import { IMessageDataWrapper } from '../../../../../api';
export declare class FriendCategoryData {
    private _id;
    private _name;
    constructor(wrapper: IMessageDataWrapper);
    get id(): number;
    get name(): string;
}
