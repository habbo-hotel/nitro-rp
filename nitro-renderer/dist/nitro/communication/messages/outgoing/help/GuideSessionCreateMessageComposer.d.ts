import { IMessageComposer } from '../../../../../api';
export declare class GuideSessionCreateMessageComposer implements IMessageComposer<ConstructorParameters<typeof GuideSessionCreateMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: string);
    getMessageArray(): [k: number, _arg_2: string];
    dispose(): void;
}
