import { ReactNode } from "react";

export interface ProgressBarProps {
    value: number;
    maxValue: number;
    minValue: number;
    className?: string;
    children?: ReactNode;
}