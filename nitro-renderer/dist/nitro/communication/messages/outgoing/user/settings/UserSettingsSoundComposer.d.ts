import { IMessageComposer } from '../../../../../../api';
export declare class UserSettingsSoundComposer implements IMessageComposer<ConstructorParameters<typeof UserSettingsSoundComposer>> {
    private _data;
    constructor(volumeSystem: number, volumeFurni: number, volumeTrax: number);
    getMessageArray(): [volumeSystem: number, volumeFurni: number, volumeTrax: number];
    dispose(): void;
}
