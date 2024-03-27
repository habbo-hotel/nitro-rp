import { IMessageComposer } from '../../../../../api';
export declare class ForwardToARandomPromotedRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof ForwardToARandomPromotedRoomMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
