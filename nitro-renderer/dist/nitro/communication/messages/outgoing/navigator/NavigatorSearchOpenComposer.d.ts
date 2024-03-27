import { IMessageComposer } from '../../../../../api';
export declare class NavigatorSearchOpenComposer implements IMessageComposer<ConstructorParameters<typeof NavigatorSearchOpenComposer>> {
    private _data;
    constructor(code: string);
    getMessageArray(): [code: string];
    dispose(): void;
}
