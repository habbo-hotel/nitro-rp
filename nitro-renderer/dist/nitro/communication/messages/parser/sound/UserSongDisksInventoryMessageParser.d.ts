import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class UserSongDisksInventoryMessageParser implements IMessageParser {
    private _songDiskInventory;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    getDiskId(k: number): number;
    getSongId(k: number): number;
    get songDiskCount(): number;
}
