import { IMessageComposer } from '../../../../../api';
export declare class NavigatorSearchCloseComposer implements IMessageComposer<ConstructorParameters<typeof NavigatorSearchCloseComposer>> {
    private _data;
    constructor(code: string);
    getMessageArray(): [code: string];
    dispose(): void;
}
