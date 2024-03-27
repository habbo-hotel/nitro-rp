import { IMessageComposer } from '../../../../../../../api';
export declare class UserSubscriptionComposer implements IMessageComposer<ConstructorParameters<typeof UserSubscriptionComposer>> {
    private _data;
    constructor(type: string);
    getMessageArray(): [type: string];
    dispose(): void;
}
