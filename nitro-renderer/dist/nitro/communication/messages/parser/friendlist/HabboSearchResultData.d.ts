import { IMessageDataWrapper } from '../../../../../api';
export declare class HabboSearchResultData {
    private _avatarId;
    private _avatarName;
    private _avatarMotto;
    private _isAvatarOnline;
    private _canFollow;
    private _avatarGender;
    private _avatarFigure;
    private _lastOnlineData;
    private _realName;
    constructor(wrapper: IMessageDataWrapper);
    get avatarId(): number;
    get avatarName(): string;
    get avatarMotto(): string;
    get isAvatarOnline(): boolean;
    get canFollow(): boolean;
    get avatarGender(): number;
    get avatarFigure(): string;
    get lastOnlineData(): string;
    get realName(): string;
}
