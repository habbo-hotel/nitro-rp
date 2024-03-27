import { IActionDefinition, IFigureSetData } from '../../../api';
import { ActionDefinition } from '../actions';
import { ActivePartSet, PartDefinition } from './parts';
export declare class PartSetsData implements IFigureSetData {
    private _parts;
    private _activePartSets;
    constructor();
    parse(data: any): boolean;
    appendJSON(data: any): boolean;
    getActiveParts(k: IActionDefinition): string[];
    getPartDefinition(part: string): PartDefinition;
    addPartDefinition(k: any): PartDefinition;
    getActivePartSet(k: ActionDefinition): ActivePartSet;
    get parts(): Map<string, PartDefinition>;
    get activePartSets(): Map<string, ActivePartSet>;
}
