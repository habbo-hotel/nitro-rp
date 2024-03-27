import { IMessageComposer } from '../../../../../../api';
export declare class UserSettingsCameraFollowComposer implements IMessageComposer<ConstructorParameters<typeof UserSettingsCameraFollowComposer>> {
    private _data;
    constructor(value: boolean);
    getMessageArray(): [value: boolean];
    dispose(): void;
}
