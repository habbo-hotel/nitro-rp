import { IMessageComposer } from '../../../../../api';
export declare class GetOfficialRoomsMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetOfficialRoomsMessageComposer>> {
    private _data;
    constructor(k?: number);
    getMessageArray(): [k?: number];
    dispose(): void;
}
