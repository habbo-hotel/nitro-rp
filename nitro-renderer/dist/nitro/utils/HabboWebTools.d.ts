export declare class HabboWebTools {
    static ADVERTISEMENT: string;
    static OPENLINK: string;
    static OPENROOM: string;
    static logEventLog(data: string): void;
    static openPage(pageUrl: string): void;
    static openWebPage(pageUrl: string): void;
    static sendHeartBeat(): void;
    static openWebPageAndMinimizeClient(pageUrl: string): void;
    static closeWebPageAndRestoreClient(): void;
    static openHabblet(name: string, param?: string): void;
    static closeHabblet(name: string, param?: string): void;
    static send(reasonCode: number, reasonString: string): void;
    static showGame(gameUrl: string): void;
    static hideGame(): void;
    static open(url: string): void;
    static roomVisited(roomId: number): void;
    static openMinimail(target: string): void;
    static openNews(): void;
    static closeNews(): void;
    static openAvatars(): void;
    static openRoomEnterAd(): void;
    static updateFigure(figure: string): void;
}
