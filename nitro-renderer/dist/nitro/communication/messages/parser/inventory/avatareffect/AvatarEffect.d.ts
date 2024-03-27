export declare class AvatarEffect {
    private _type;
    private _subType;
    private _duration;
    private _inactiveEffectsInInventory;
    private _secondsLeftIfActive;
    private _permanent;
    get type(): number;
    set type(k: number);
    get subType(): number;
    set subType(k: number);
    get duration(): number;
    set duration(k: number);
    get inactiveEffectsInInventory(): number;
    set inactiveEffectsInInventory(k: number);
    get secondsLeftIfActive(): number;
    set secondsLeftIfActive(k: number);
    get isPermanent(): boolean;
    set isPermanent(k: boolean);
}
