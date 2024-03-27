import { IMessageDataWrapper } from '../../../../../../api';
export declare class RoomEventData {
    private _adId;
    private _ownerAvatarId;
    private _ownerAvatarName;
    private _flatId;
    private _categoryId;
    private _eventType;
    private _eventName;
    private _eventDescription;
    private _creationTime;
    private _expirationDate;
    private _disposed;
    constructor(k: IMessageDataWrapper);
    dispose(): void;
    get disposed(): boolean;
    get adId(): number;
    get ownerAvatarId(): number;
    get ownerAvatarName(): string;
    get flatId(): number;
    get categoryId(): number;
    get eventType(): number;
    get eventName(): string;
    get eventDescription(): string;
    get creationTime(): string;
    get expirationDate(): Date;
}
