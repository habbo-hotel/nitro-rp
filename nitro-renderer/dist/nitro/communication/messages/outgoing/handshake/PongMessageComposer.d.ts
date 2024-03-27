import { IMessageComposer } from '../../../../../api';
export declare class PongMessageComposer implements IMessageComposer<ConstructorParameters<typeof PongMessageComposer>> {
    private _data;
    constructor();
    getMessageArray(): [];
    dispose(): void;
}
