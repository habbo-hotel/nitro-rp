import { IMessageComposer } from '../../../../../api';
import { NewUserExperienceGetGiftsSelection } from './NewUserExperienceGetGiftsSelection';
export declare class NewUserExperienceGetGiftsComposer implements IMessageComposer<ConstructorParameters<typeof NewUserExperienceGetGiftsComposer>> {
    private _data;
    constructor(...data: NewUserExperienceGetGiftsSelection[]);
    dispose(): void;
    getMessageArray(): any;
}
