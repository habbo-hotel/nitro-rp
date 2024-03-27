import { IMessageComposer } from '../../../../../../api';
export declare class AvatarEffectActivatedComposer implements IMessageComposer<ConstructorParameters<typeof AvatarEffectActivatedComposer>> {
    private _data;
    constructor(type: number);
    dispose(): void;
    getMessageArray(): [type: number];
}
