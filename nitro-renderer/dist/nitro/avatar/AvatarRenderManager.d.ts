import { IAssetManager, IAvatarEffectListener, IAvatarFigureContainer, IAvatarImage, IAvatarImageListener, IAvatarRenderManager, IGraphicAsset, IStructureData } from '../../api';
import { NitroManager } from '../../core';
import { AvatarAssetDownloadManager } from './AvatarAssetDownloadManager';
import { AvatarStructure } from './AvatarStructure';
export declare class AvatarRenderManager extends NitroManager implements IAvatarRenderManager {
    private static DEFAULT_FIGURE;
    private _aliasCollection;
    private _structure;
    private _avatarAssetDownloadManager;
    private _effectAssetDownloadManager;
    private _placeHolderFigure;
    private _figureMapReady;
    private _effectMapReady;
    private _actionsReady;
    private _structureReady;
    private _geometryReady;
    private _partSetsReady;
    private _animationsReady;
    private _isReady;
    constructor();
    onInit(): void;
    onDispose(): void;
    private loadGeometry;
    private loadPartSets;
    private loadActions;
    private loadAnimations;
    private loadFigureData;
    private onAvatarStructureDownloadDone;
    private onAvatarAssetDownloaderReady;
    private onAvatarAssetDownloaded;
    private onEffectAssetDownloaderReady;
    private onEffectAssetDownloaded;
    private checkReady;
    createFigureContainer(figure: string): IAvatarFigureContainer;
    isFigureContainerReady(container: IAvatarFigureContainer): boolean;
    createAvatarImage(figure: string, size: string, gender: string, listener?: IAvatarImageListener, effectListener?: IAvatarEffectListener): IAvatarImage;
    downloadAvatarFigure(container: IAvatarFigureContainer, listener: IAvatarImageListener): void;
    private validateAvatarFigure;
    getFigureClubLevel(container: IAvatarFigureContainer, gender: string, searchParts?: string[]): number;
    isValidFigureSetForGender(setId: number, gender: string): boolean;
    getFigureStringWithFigureIds(figure: string, gender: string, _arg_3: number[]): string;
    private resolveFigureSets;
    getMandatoryAvatarPartSetIds(k: string, _arg_2: number): string[];
    getAssetByName(name: string): IGraphicAsset;
    get assets(): IAssetManager;
    get isReady(): boolean;
    get structure(): AvatarStructure;
    get structureData(): IStructureData;
    get downloadManager(): AvatarAssetDownloadManager;
}
