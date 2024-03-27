export declare class AvatarSet {
    private _id;
    private _isMain;
    private _avatarSets;
    private _bodyParts;
    private _allBodyParts;
    constructor(k: any);
    findAvatarSet(k: string): AvatarSet;
    getBodyParts(): string[];
    get id(): string;
    get isMain(): boolean;
}
