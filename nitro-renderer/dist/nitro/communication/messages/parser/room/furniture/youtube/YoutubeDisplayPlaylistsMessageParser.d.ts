import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
import { YoutubeDisplayPlaylist } from './YoutubeDisplayPlaylist';
export declare class YoutubeDisplayPlaylistsMessageParser implements IMessageParser {
    private _furniId;
    private _playlists;
    private _selectedPlaylistId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get furniId(): number;
    get playlists(): YoutubeDisplayPlaylist[];
    get selectedPlaylistId(): string;
}
