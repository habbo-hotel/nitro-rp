declare global {
    interface Window {
        FlashExternalInterface?: {
            legacyTrack?: (category: string, action: string, data: unknown[]) => void;
            logDebug?: (...params: string[]) => void;
            disconnect?: (reasonCode: number, reasonString: string) => void;
            logout?: () => void;
            openWebPageAndMinimizeClient?: (pageUrl: string) => void;
            heartBeat?: () => void;
            logEventLog?: (log: string) => void;
            openPage?: (pageUrl: string) => void;
            closeWebPageAndRestoreClient?: () => void;
            openHabblet?: (name: string, param: string) => void;
            closeHabblet?: (name: string, param: string) => void;
            openExternalLink?: (link: string) => void;
            roomVisited?: (roomId: number) => void;
            openMinimail?: (target: string) => void;
            openNews?: () => void;
            closeNews?: () => void;
            openAvatars?: () => void;
            openRoomEnterAd?: () => void;
            updateFigure?: (figure: string) => void;
        };
        FlashExternalGameInterface?: {
            showGame?: (url: string) => void;
            hideGame?: () => void;
        };
    }
}
export declare class LegacyExternalInterface {
    private static readonly MESSAGE_KEY;
    private static _isListeningForPostMessages;
    static get available(): boolean;
    static call<K extends keyof typeof window.FlashExternalInterface>(method: K, ...params: Parameters<typeof window.FlashExternalInterface[K]>): ReturnType<typeof window.FlashExternalInterface[K]> | undefined;
    static callGame<K extends keyof typeof window.FlashExternalGameInterface>(method: K, ...params: Parameters<typeof window.FlashExternalGameInterface[K]>): ReturnType<typeof window.FlashExternalGameInterface[K]> | undefined;
    static addCallback(name: string, func: Function): void;
}
