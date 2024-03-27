import { IMessageComposer } from '../../../../../api';
export declare class NavigatorSettingsSaveComposer implements IMessageComposer<ConstructorParameters<typeof NavigatorSettingsSaveComposer>> {
    private _data;
    constructor(x: number, y: number, width: number, height: number, leftSideOpen: boolean, mode: number);
    getMessageArray(): [x: number, y: number, width: number, height: number, leftSideOpen: boolean, mode: number];
    dispose(): void;
}
