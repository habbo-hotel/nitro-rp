import { IMessageDataWrapper } from '../../../../../../api';
export declare class RelationshipStatusInfo {
    private _relationshipStatusType;
    private _friendCount;
    private _randomFriendId;
    private _randomFriendName;
    private _randomFriendFigure;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get relationshipStatusType(): number;
    get friendCount(): number;
    get randomFriendId(): number;
    get randomFriendName(): string;
    get randomFriendFigure(): string;
}
