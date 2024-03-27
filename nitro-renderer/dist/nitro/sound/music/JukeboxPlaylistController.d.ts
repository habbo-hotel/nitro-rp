import { IPlaylistController, ISongInfo } from '../../../api';
export declare class JukeboxPlaylistController implements IPlaylistController {
    private _isPlaying;
    private _entries;
    private _currentEntryId;
    private _missingSongInfo;
    private _playPosition;
    private _disposed;
    private _messageEvents;
    constructor();
    init(): void;
    get priority(): number;
    private onNowPlayingMessageEvent;
    private onJukeboxSongDisksMessageEvent;
    private onJukeboxPlayListFullMessageEvent;
    private onSongInfoReceivedEvent;
    stopPlaying(): void;
    get length(): number;
    get playPosition(): number;
    get nowPlayingSongId(): number;
    get isPlaying(): boolean;
    get entries(): ISongInfo[];
    getEntry(k: number): ISongInfo;
    requestPlayList(): void;
    dispose(): void;
}
