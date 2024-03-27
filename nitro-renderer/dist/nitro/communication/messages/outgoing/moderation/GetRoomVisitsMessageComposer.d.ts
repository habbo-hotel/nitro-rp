import { IMessageComposer } from '../../../../../api';
export declare class GetRoomVisitsMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetRoomVisitsMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
