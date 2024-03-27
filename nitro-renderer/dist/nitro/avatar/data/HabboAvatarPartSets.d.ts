export declare const HabboAvatarPartSets: {
    partSets: {
        partSet: ({
            setType: string;
            flippedSetType: string;
            swim?: undefined;
            removeSetType?: undefined;
        } | {
            setType: string;
            swim: string;
            flippedSetType: string;
            removeSetType?: undefined;
        } | {
            setType: string;
            flippedSetType?: undefined;
            swim?: undefined;
            removeSetType?: undefined;
        } | {
            setType: string;
            removeSetType: string;
            flippedSetType?: undefined;
            swim?: undefined;
        })[];
        activePartSets: {
            id: string;
            activeParts: {
                setType: string;
            }[];
        }[];
    };
};
