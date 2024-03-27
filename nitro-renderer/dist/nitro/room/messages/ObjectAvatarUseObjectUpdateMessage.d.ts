import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarUseObjectUpdateMessage extends ObjectStateUpdateMessage {
    private _itemType;
    constructor(itemType: number);
    get itemType(): number;
}
