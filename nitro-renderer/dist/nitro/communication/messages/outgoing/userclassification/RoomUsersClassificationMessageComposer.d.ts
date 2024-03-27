import { IMessageComposer } from '../../../../../api';
export declare class RoomUsersClassificationMessageComposer implements IMessageComposer<ConstructorParameters<typeof RoomUsersClassificationMessageComposer>> {
    private _data;
    constructor(userClassType: string);
    getMessageArray(): [userClassType: string];
    dispose(): void;
}
