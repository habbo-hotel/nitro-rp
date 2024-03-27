import { IMessageComposer } from '../../../../../api';
export declare class ConvertGlobalRoomIdMessageComposer implements IMessageComposer<ConstructorParameters<typeof ConvertGlobalRoomIdMessageComposer>> {
    private _data;
    constructor(flatId: string);
    getMessageArray(): [flatId: string];
    dispose(): void;
}
