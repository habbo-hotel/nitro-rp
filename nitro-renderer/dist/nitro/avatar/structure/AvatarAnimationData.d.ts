import { IActionDefinition, IFigureSetData } from '../../../api';
import { AnimationAction } from './animation';
export declare class AvatarAnimationData implements IFigureSetData {
    private _actions;
    constructor();
    parse(data: any): boolean;
    appendJSON(k: any): boolean;
    getAction(action: IActionDefinition): AnimationAction;
    getFrameCount(k: IActionDefinition): number;
}
