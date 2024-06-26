import { IConnection, IRoomSession } from '../../api';
import { Disposable } from '../../core';
import { RoomModerationSettings } from '../communication';
import { UserDataManager } from './UserDataManager';
export declare class RoomSession extends Disposable implements IRoomSession {
    private _connection;
    private _userData;
    private _roomId;
    private _password;
    private _state;
    private _tradeMode;
    private _doorMode;
    private _allowPets;
    private _controllerLevel;
    private _ownRoomIndex;
    private _isGuildRoom;
    private _isRoomOwner;
    private _isDecorating;
    private _isSpectator;
    private _moderationSettings;
    constructor();
    protected onDispose(): void;
    setConnection(connection: IConnection): void;
    setControllerLevel(level: number): void;
    setOwnRoomIndex(roomIndex: number): void;
    setRoomOwner(): void;
    start(): boolean;
    private enterRoom;
    reset(roomId: number): void;
    sendChatMessage(text: string, styleId: number): void;
    sendShoutMessage(text: string, styleId: number): void;
    sendWhisperMessage(recipientName: string, text: string, styleId: number): void;
    sendChatTypingMessage(isTyping: boolean): void;
    sendMottoMessage(motto: string): void;
    sendDanceMessage(danceId: number): void;
    sendExpressionMessage(expression: number): void;
    sendSignMessage(sign: number): void;
    sendPostureMessage(posture: number): void;
    sendDoorbellApprovalMessage(userName: string, flag: boolean): void;
    sendAmbassadorAlertMessage(userId: number): void;
    sendKickMessage(userId: number): void;
    sendMuteMessage(userId: number, minutes: number): void;
    sendBanMessage(userId: number, type: string): void;
    sendGiveRightsMessage(userId: number): void;
    sendTakeRightsMessage(userId: number): void;
    sendPollStartMessage(pollId: number): void;
    sendPollRejectMessage(pollId: number): void;
    sendPollAnswerMessage(pollId: number, questionId: number, answers: string[]): void;
    sendPeerUsersClassificationMessage(userClassType: string): void;
    sendOpenPetPackageMessage(objectId: number, petName: string): void;
    sendRoomUsersClassificationMessage(userClassType: string): void;
    updateMoodlightData(id: number, effectId: number, color: number, brightness: number, apply: boolean): void;
    toggleMoodlightState(): void;
    pickupPet(id: number): void;
    pickupBot(id: number): void;
    requestMoodlightSettings(): void;
    openGift(objectId: number): void;
    mountPet(id: number): void;
    dismountPet(id: number): void;
    usePetProduct(itemId: number, petId: number): void;
    removePetSaddle(id: number): void;
    togglePetBreeding(id: number): void;
    togglePetRiding(id: number): void;
    useMultistateItem(id: number): void;
    harvestPet(id: number): void;
    compostPlant(id: number): void;
    requestPetCommands(id: number): void;
    sendScriptProceed(): void;
    sendUpdateClothingChangeFurniture(objectId: number, gender: string, look: string): void;
    changeQueue(targetQueue: number): void;
    votePoll(counter: number): void;
    get connection(): IConnection;
    get userDataManager(): UserDataManager;
    get roomId(): number;
    set roomId(roomId: number);
    get password(): string;
    set password(password: string);
    get state(): string;
    get isPrivateRoom(): boolean;
    get tradeMode(): number;
    set tradeMode(mode: number);
    get doorMode(): number;
    set doorMode(mode: number);
    get allowPets(): boolean;
    set allowPets(flag: boolean);
    get controllerLevel(): number;
    get ownRoomIndex(): number;
    get isGuildRoom(): boolean;
    set isGuildRoom(flag: boolean);
    get isRoomOwner(): boolean;
    get isDecorating(): boolean;
    set isDecorating(flag: boolean);
    get isSpectator(): boolean;
    set isSpectator(flag: boolean);
    get moderationSettings(): RoomModerationSettings;
    set moderationSettings(parser: RoomModerationSettings);
}
