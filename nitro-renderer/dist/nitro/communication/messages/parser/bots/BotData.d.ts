import { IMessageDataWrapper } from '../../../../../api';
export declare class BotData {
    private _id;
    private _name;
    private _motto;
    private _gender;
    private _figure;
    constructor(wrapper: IMessageDataWrapper);
    get id(): number;
    get name(): string;
    get motto(): string;
    get figure(): string;
    get gender(): string;
}
