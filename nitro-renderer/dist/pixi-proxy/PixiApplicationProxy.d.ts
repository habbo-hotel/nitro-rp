import { Application, IApplicationOptions } from '@pixi/app';
export declare class PixiApplicationProxy extends Application {
    private static INSTANCE;
    constructor(options?: IApplicationOptions);
    static get instance(): Application;
}
