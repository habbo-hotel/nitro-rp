import { IMessageComposer } from '../../../../../../api';
export declare class RequestABadgeComposer implements IMessageComposer<ConstructorParameters<typeof RequestABadgeComposer>> {
    private _data;
    constructor(requestCode: string);
    dispose(): void;
    getMessageArray(): [requestCode: string];
}
