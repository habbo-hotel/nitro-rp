import { IActionDefinition, IActiveActionData } from '../../../api';
export declare class ActiveActionData implements IActiveActionData {
    private _actionType;
    private _actionParameter;
    private _definition;
    private _startFrame;
    private _overridingAction;
    constructor(action: string, parameter?: string, startFrame?: number);
    dispose(): void;
    get id(): string;
    get actionType(): string;
    get actionParameter(): string;
    set actionParameter(parameter: string);
    get definition(): IActionDefinition;
    set definition(definition: IActionDefinition);
    get startFrame(): number;
    get overridingAction(): string;
    set overridingAction(action: string);
}
