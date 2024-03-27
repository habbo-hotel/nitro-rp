import { IMessageComposer } from '../../../../../api';
export declare class RoomAdEventTabAdClickedComposer implements IMessageComposer<ConstructorParameters<typeof RoomAdEventTabAdClickedComposer>> {
    private _data;
    constructor(k: number, _arg_2: string, _arg_3: number);
    getMessageArray(): [k: number, _arg_2: string, _arg_3: number];
    dispose(): void;
}
