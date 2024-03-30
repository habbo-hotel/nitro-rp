import { Text } from "../../../common";
import { ProgressBarProps } from "./ProgressBar.types";

export function ProgressBar({ children, className, value, maxValue, minValue }: ProgressBarProps) {
    return (
        <div className={`roleplay-stats-progress-bar ${className}`}>
            <div className="progress"  />
            <div className="progress-text">
                <Text small variant="white">{children ?? `${value}/${maxValue}`}</Text>
            </div>
        </div>
    )
}