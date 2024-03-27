import { IMessageComposer } from '../../../../../api';
export declare class ToggleStaffPickMessageComposer implements IMessageComposer<ConstructorParameters<typeof ToggleStaffPickMessageComposer>> {
    private _data;
    constructor(roomId: number);
    getMessageArray(): [roomId: number];
    dispose(): void;
}
