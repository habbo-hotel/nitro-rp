export declare const HabboAvatarGeometry: {
    geometry: {
        direction: number;
        camera: {
            x: number;
            y: number;
            z: number;
        };
        canvases: {
            scale: string;
            geometries: {
                id: string;
                width: number;
                height: number;
                dx: number;
                dy: number;
            }[];
        }[];
        avatarSets: {
            id: string;
            avatarSets: ({
                id: string;
                main: boolean;
                bodyParts: {
                    id: string;
                }[];
            } | {
                id: string;
                bodyParts: {
                    id: string;
                }[];
                main?: undefined;
            })[];
        }[];
        types: {
            id: string;
            bodyParts: ({
                id: string;
                x: number;
                y: number;
                z: number;
                radius: number;
                items?: undefined;
            } | {
                id: string;
                x: number;
                y: number;
                z: number;
                radius: number;
                items: {
                    id: string;
                    x: number;
                    y: number;
                    z: number;
                    radius: number;
                    nx: number;
                    ny: number;
                    nz: number;
                    double: boolean;
                }[];
            })[];
        }[];
    };
};
