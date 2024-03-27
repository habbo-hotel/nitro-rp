import { IMessageComposer } from '../../../../../api';
export declare class BuildersClubPlaceWallItemMessageComposer implements IMessageComposer<ConstructorParameters<typeof BuildersClubPlaceWallItemMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: string, _arg_4: string);
    dispose(): void;
    getMessageArray(): [k: number, _arg_2: number, _arg_3: string, _arg_4: string];
}
