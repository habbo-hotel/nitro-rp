export declare class FigureDataContainer {
    private static MALE;
    private static FEMALE;
    private static UNISEX;
    private static SCALE;
    private static STD;
    private static DEFAULT_FRAME;
    private static HD;
    private static HAIR;
    private static HAT;
    private static HEAD_ACCESSORIES;
    private static EYE_ACCESSORIES;
    private static FACE_ACCESSORIES;
    private static JACKET;
    private static SHIRT;
    private static CHEST_ACCESSORIES;
    private static CHEST_PRINTS;
    private static TROUSERS;
    private static SHOES;
    private static TROUSER_ACCESSORIES;
    private static BLOCKED_FX_TYPES;
    private _data;
    private _colors;
    private _gender;
    private _isDisposed;
    private _avatarEffectType;
    loadAvatarData(figure: string, gender: string): void;
    dispose(): void;
    get disposed(): boolean;
    private parseFigureString;
    hasSetType(k: string): boolean;
    getPartSetId(k: string): number;
    getColourIds(k: string): number[];
    getFigureString(): string;
    savePartData(k: string, _arg_2: number, _arg_3: number[], _arg_4?: boolean): void;
    private savePartSetId;
    savePartSetColourId(k: string, _arg_2: number[], _arg_3?: boolean): void;
    getFigureStringWithFace(k: number): string;
    get gender(): string;
}
