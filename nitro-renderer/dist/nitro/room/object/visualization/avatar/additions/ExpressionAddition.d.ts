import { IRoomObjectSprite } from '../../../../../../api';
import { AvatarVisualization } from '../AvatarVisualization';
import { IExpressionAddition } from './IExpressionAddition';
export declare class ExpressionAddition implements IExpressionAddition {
    private _id;
    private _type;
    private _visualization;
    constructor(id: number, type: number, visualization: AvatarVisualization);
    dispose(): void;
    update(sprite: IRoomObjectSprite, scale: number): void;
    animate(sprite: IRoomObjectSprite): boolean;
    get id(): number;
    get type(): number;
    get visualization(): AvatarVisualization;
}
