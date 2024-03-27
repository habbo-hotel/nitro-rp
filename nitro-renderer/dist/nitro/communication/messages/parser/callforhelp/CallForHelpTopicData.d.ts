import { IMessageDataWrapper } from '../../../../../api';
import { INamed } from '../moderation';
export declare class CallForHelpTopicData implements INamed {
    private _name;
    private _id;
    private _consequence;
    constructor(wrapper: IMessageDataWrapper);
    get name(): string;
    get id(): number;
    get consequence(): string;
}
