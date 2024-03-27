import { IMessageComposer } from '../../../../../api';
export declare class NavigatorSearchSaveComposer implements IMessageComposer<ConstructorParameters<typeof NavigatorSearchSaveComposer>> {
    private _data;
    constructor(code: string, data: string);
    getMessageArray(): [code: string, data: string];
    dispose(): void;
}
