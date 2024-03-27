import { IMessageComposer } from '../../../../../../../api';
export declare class MoodlightSettingsSaveComposer implements IMessageComposer<ConstructorParameters<typeof MoodlightSettingsSaveComposer>> {
    private _data;
    constructor(k: number, arg2: number, arg3: string, arg4: number, arg5: boolean);
    getMessageArray(): [k: number, arg2: number, arg3: string, arg4: number, arg5: boolean];
    dispose(): void;
}
