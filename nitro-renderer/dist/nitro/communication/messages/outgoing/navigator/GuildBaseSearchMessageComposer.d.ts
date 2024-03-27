import { IMessageComposer } from '../../../../../api';
export declare class GuildBaseSearchMessageComposer implements IMessageComposer<ConstructorParameters<typeof GuildBaseSearchMessageComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
