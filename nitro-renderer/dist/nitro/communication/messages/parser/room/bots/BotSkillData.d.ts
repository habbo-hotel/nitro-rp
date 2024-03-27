import { IMessageDataWrapper } from '../../../../../../api';
export declare class BotSkillData {
    private _id;
    private _data;
    constructor(wrapper: IMessageDataWrapper);
    get id(): number;
    get data(): string;
}
