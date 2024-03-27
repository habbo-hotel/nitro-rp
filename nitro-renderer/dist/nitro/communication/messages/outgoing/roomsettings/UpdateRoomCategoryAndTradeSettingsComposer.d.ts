import { IMessageComposer } from '../../../../../api';
export declare class UpdateRoomCategoryAndTradeSettingsComposer implements IMessageComposer<ConstructorParameters<typeof UpdateRoomCategoryAndTradeSettingsComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number];
    dispose(): void;
}
