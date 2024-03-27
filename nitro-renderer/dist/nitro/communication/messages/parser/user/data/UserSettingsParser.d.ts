import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserSettingsParser implements IMessageParser {
    private _volumeSystem;
    private _volumeFurni;
    private _volumeTrax;
    private _oldChat;
    private _roomInvites;
    private _cameraFollow;
    private _flags;
    private _chatType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get volumeSystem(): number;
    get volumeFurni(): number;
    get volumeTrax(): number;
    get oldChat(): boolean;
    get roomInvites(): boolean;
    get cameraFollow(): boolean;
    get flags(): number;
    get chatType(): number;
}
