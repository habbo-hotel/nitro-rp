import { IMessageComposer } from '../../../../../../api';
export declare class Game2ExitGameMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2ExitGameMessageComposer>> {
    private _data;
    constructor(exitToRoomBeforeGame?: boolean);
    dispose(): void;
    getMessageArray(): [exitToRoomBeforeGame?: boolean];
}
