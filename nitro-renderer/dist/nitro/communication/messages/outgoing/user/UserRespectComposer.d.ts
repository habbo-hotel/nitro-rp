import { IMessageComposer } from '../../../../../api';
export declare class UserRespectComposer implements IMessageComposer<ConstructorParameters<typeof UserRespectComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
