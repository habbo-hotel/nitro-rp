import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectModelDataUpdateMessage extends RoomObjectUpdateMessage {
    private _numberKey;
    private _numberValue;
    constructor(numberKey: string, numberValue: number);
    get numberKey(): string;
    get numberValue(): number;
}
