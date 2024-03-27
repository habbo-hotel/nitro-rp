import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class OfficialSongIdMessageParser implements IMessageParser {
    private _songId;
    private _officialSongId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get songId(): number;
    get officialSongId(): string;
}
