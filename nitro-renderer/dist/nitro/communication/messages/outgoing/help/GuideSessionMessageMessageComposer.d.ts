import { IMessageComposer } from '../../../../../api';
export declare class GuideSessionMessageMessageComposer implements IMessageComposer<ConstructorParameters<typeof GuideSessionMessageMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
