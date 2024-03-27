import { IMessageComposer } from '../../../../../api';
export declare class RoomNetworkOpenConnectionMessageComposer implements IMessageComposer<ConstructorParameters<typeof RoomNetworkOpenConnectionMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
