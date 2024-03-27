import { Howl } from 'howler';
export declare class MusicPlayer {
    private _currentSong;
    private _currentSongId;
    private _startPos;
    private _playLength;
    private _isPlaying;
    private _currentPos;
    private _cache;
    private _sampleUrl;
    private _tickerInterval;
    private _sequence;
    constructor(sampleUrl: string);
    play(song: string, currentSongId: number, startPos?: number, playLength?: number): Promise<void>;
    private reset;
    pause(): void;
    resume(): void;
    stop(): void;
    /**
     * Sets global howler volume for all sounds
     * @param volume value from 0.0 to 1.0
     */
    setVolume(volume: number): void;
    /**
     * Gets global howler volume for all sounds
     * @returns value from 0.0 to 1.0
     */
    getVolume(): number;
    /**
     * Gets sample from cache or loads it if not in cache
     * @param id sample id
     * @returns howl sound object
     */
    getSample(id: number): Promise<Howl>;
    private preload;
    preloadSamplesForSong(song: string): Promise<void>;
    private loadSong;
    private tick;
    private playPosition;
}
