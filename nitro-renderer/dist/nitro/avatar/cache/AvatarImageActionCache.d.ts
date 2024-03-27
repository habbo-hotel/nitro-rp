import { AvatarImageDirectionCache } from './AvatarImageDirectionCache';
export declare class AvatarImageActionCache {
    private _cache;
    private _lastAccessTime;
    constructor();
    dispose(): void;
    getDirectionCache(k: number): AvatarImageDirectionCache;
    updateDirectionCache(k: number, _arg_2: AvatarImageDirectionCache): void;
    setLastAccessTime(k: number): void;
    getLastAccessTime(): number;
    private debugInfo;
}
