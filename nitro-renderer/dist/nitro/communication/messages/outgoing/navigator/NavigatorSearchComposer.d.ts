import { IMessageComposer } from '../../../../../api';
export declare class NavigatorSearchComposer implements IMessageComposer<ConstructorParameters<typeof NavigatorSearchComposer>> {
    private _data;
    constructor(code: string, data: string);
    getMessageArray(): [code: string, data: string];
    dispose(): void;
}
