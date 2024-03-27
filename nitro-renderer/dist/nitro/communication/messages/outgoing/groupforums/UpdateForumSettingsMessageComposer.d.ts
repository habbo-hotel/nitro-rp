import { IMessageComposer } from '../../../../../api';
export declare class UpdateForumSettingsMessageComposer implements IMessageComposer<ConstructorParameters<typeof UpdateForumSettingsMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number, _arg_4: number, _arg_5: number);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number, _arg_4: number, _arg_5: number];
    dispose(): void;
}
