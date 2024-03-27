import { IAvatarEffectListener, IAvatarImage, IAvatarImageListener, IAvatarRenderManager } from '../../../../../api';
import { FurnitureVisualizationData } from './FurnitureVisualizationData';
export declare class FurnitureMannequinVisualizationData extends FurnitureVisualizationData {
    private _avatarData;
    constructor();
    dispose(): void;
    createAvatarImage(figure: string, size: number, gender?: string, avatarListener?: IAvatarImageListener, effectListener?: IAvatarEffectListener): IAvatarImage;
    set avatarManager(renderer: IAvatarRenderManager);
}
