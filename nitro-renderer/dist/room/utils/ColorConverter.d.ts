import { IVector3D } from '../../api';
export declare class ColorConverter {
    private static HEX_DIGITS;
    static hex2rgb(hex: number, out?: Array<number> | Float32Array): Array<number> | Float32Array;
    static hex2rgba(hex: number, out?: Array<number> | Float32Array): Array<number> | Float32Array;
    static rgb2hex(rgb: number[] | Float32Array): number;
    static rgba2hex(rgb: number[] | Float32Array): number;
    static rgbStringToHex(rgb: string): string;
    static getHex(x: any): string;
    static int2rgb(color: number): string;
    static rgbToHSL(k: number): number;
    static hslToRGB(k: number): number;
    static rgb2xyz(k: number): IVector3D;
    static xyz2CieLab(k: IVector3D): IVector3D;
    static rgb2CieLab(k: number): IVector3D;
    static colorize(colorA: number, colorB: number): number;
}
