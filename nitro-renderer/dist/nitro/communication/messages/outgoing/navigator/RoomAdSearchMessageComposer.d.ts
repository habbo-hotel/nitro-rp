import { IMessageComposer } from '../../../../../api';
export declare class RoomAdSearchMessageComposer implements IMessageComposer<ConstructorParameters<typeof RoomAdSearchMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
