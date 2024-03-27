import { IActiveActionData, IAssetManager } from '../../../api';
import { ActionDefinition } from './ActionDefinition';
export declare class AvatarActionManager {
    private _assets;
    private _actions;
    private _defaultAction;
    constructor(k: IAssetManager, data: any);
    updateActions(data: any): void;
    private parseActionOffsets;
    getActionDefinition(id: string): ActionDefinition;
    getActionDefinitionWithState(state: string): ActionDefinition;
    getDefaultAction(): ActionDefinition;
    getCanvasOffsets(k: IActiveActionData[], _arg_2: string, _arg_3: number): number[];
    sortActions(actions: IActiveActionData[]): IActiveActionData[];
    private filterActions;
    private sortByPrecedence;
}
