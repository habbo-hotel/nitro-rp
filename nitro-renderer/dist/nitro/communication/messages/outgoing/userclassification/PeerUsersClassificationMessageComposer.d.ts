import { IMessageComposer } from '../../../../../api';
export declare class PeerUsersClassificationMessageComposer implements IMessageComposer<ConstructorParameters<typeof PeerUsersClassificationMessageComposer>> {
    private _data;
    constructor(userClassType: string);
    getMessageArray(): [userClassType: string];
    dispose(): void;
}
