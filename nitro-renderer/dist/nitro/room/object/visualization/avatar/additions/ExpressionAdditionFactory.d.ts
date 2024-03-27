import { AvatarVisualization } from '../AvatarVisualization';
import { IExpressionAddition } from './IExpressionAddition';
export declare class ExpressionAdditionFactory {
    static WAVE: number;
    static BLOW: number;
    static LAUGH: number;
    static CRY: number;
    static IDLE: number;
    static getExpressionAddition(id: number, type: number, visualization: AvatarVisualization): IExpressionAddition;
}
