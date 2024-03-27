import { IMessageComposer } from '../../../../../api';
export declare class BuildersClubPlaceRoomItemMessageComposer implements IMessageComposer<ConstructorParameters<typeof BuildersClubPlaceRoomItemMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: string, _arg_4: number, _arg_5: number, _arg_6: number);
    dispose(): void;
    getMessageArray(): [k: number, _arg_2: number, _arg_3: string, _arg_4: number, _arg_5: number, _arg_6: number];
}
