import { IMessageComposer } from '../../../../../api';
export declare class PurchaseRoomAdMessageComposer implements IMessageComposer<ConstructorParameters<typeof PurchaseRoomAdMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number, _arg_4: string, _arg_5: boolean, _arg_6: string, _arg_7: number);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number, _arg_4: string, _arg_5: boolean, _arg_6: string, _arg_7: number];
    dispose(): void;
}
