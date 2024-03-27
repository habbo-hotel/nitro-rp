import { IMessageComposer } from '../../../../../../api';
export declare class AvatarEffectSelectedComposer implements IMessageComposer<ConstructorParameters<typeof AvatarEffectSelectedComposer>> {
    private _data;
    constructor(type: number);
    dispose(): void;
    getMessageArray(): [type: number];
}
