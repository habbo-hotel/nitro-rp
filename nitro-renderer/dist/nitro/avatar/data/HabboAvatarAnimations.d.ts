export declare const HabboAvatarAnimations: {
    animations: ({
        id: string;
        parts: ({
            setType: string;
            frames: {
                number: number;
                assetPartDefinition: string;
                repeats: number;
            }[];
        } | {
            setType: string;
            frames: {
                number: number;
                assetPartDefinition: string;
            }[];
        })[];
        offsets?: undefined;
    } | {
        id: string;
        parts: ({
            setType: string;
            frames: {
                number: number;
                assetPartDefinition: string;
            }[];
        } | {
            setType: string;
            frames: {
                number: number;
                assetPartDefinition: string;
                repeats: number;
            }[];
        })[];
        offsets: {
            frames: {
                id: number;
                directions: {
                    id: number;
                    bodyParts: {
                        id: string;
                        dx: number;
                        dy: number;
                    }[];
                }[];
            }[];
        };
    })[];
};
