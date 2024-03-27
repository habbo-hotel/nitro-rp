import { IMessageDataWrapper } from '../../../../../api';
import { NewUserExperienceGift } from './NewUserExperienceGift';
export declare class NewUserExperienceGiftOptions {
    private _dayIndex;
    private _stepIndex;
    private _options;
    constructor(wrapper: IMessageDataWrapper);
    get dayIndex(): number;
    get stepIndex(): number;
    get options(): NewUserExperienceGift[];
}
