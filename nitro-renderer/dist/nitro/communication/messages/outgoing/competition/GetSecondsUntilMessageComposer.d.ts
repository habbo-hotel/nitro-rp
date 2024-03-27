import { IMessageComposer } from '../../../../../api';
export declare class GetSecondsUntilMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetSecondsUntilMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
