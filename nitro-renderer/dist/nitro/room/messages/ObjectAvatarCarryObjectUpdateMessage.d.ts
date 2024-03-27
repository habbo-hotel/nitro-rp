import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarCarryObjectUpdateMessage extends ObjectStateUpdateMessage {
    private _itemType;
    private _itemName;
    constructor(itemType: number, itemName: string);
    get itemType(): number;
    get itemName(): string;
}
