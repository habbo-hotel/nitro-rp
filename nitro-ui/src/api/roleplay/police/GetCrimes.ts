import { GetConfiguration } from "../../nitro";

export interface Crime {
    crime: string;
    sentence: number;
}

export function useCrimes(): Crime[] {
    return GetConfiguration<Crime[]>('roleplay.crimes')
}