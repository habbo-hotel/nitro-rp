export declare class RoomObjectUserType {
    static USER: string;
    static PET: string;
    static BOT: string;
    static RENTABLE_BOT: string;
    static MONSTER_PLANT: string;
    static AVATAR_TYPES: {
        [key: string]: number;
    };
    static getTypeNumber(type: string): number;
    static getTypeString(type: number): string;
    static getRealType(type: string): string;
}
