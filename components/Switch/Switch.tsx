import {
    Switch as HeadlessSwitch,
    type SwitchProps as HeadlessSwitchProps,
} from "@headlessui/react";
import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export type SwitchProps = {
    defaultEnable?: boolean;
    variant?: "common" | "contract";
    disabled?: boolean;
    onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;

const Switch = ({ defaultEnable: enabledByDefault, variant = "common", disabled, onChange, ...rest }: SwitchProps) => {
    const [enabled, setEnabled] = useState(enabledByDefault);
    const toggle = () => {
        const newState = !enabled;
        setEnabled(newState);
        onChange?.(newState);
    };
    const containerClasses = `${variant == "common" ? (enabled ? "bg-primary" : "bg-primary hover:bg-primaryHover") : (enabled ? "bg-success" : "bg-error")} ${disabled ? "pointer-events-none" : ""} outline-none relative inline-flex h-6 w-16 items-center rounded-full disabled:bg-disabled`;
    const switchClasses = `inline-block bg-white h-5 w-5 rounded-full transform transition-transform duration-200 ease-in-out ${enabled ? "translate-x-[2.1rem]" : "translate-x-1"}`;
    const iconClasses = `aria-disabled: text-font-disabled ${enabled && !disabled ? "text-success" : ""} ${!enabled && !disabled ? "text-error" : ""} ${disabled ? "text-disabled" : ""}`;

    return (<HeadlessSwitch
        checked={enabled}
        onChange={toggle}
        disabled={disabled}
        className={containerClasses}
        {...rest}
    >
        <span className="sr-only">switch toggle</span>
        {variant === "common" && <span className={switchClasses} />}
        {variant === "contract" && (
            <span className={switchClasses}>
                {enabled && (
                    <CheckIcon className={iconClasses} aria-disabled={disabled} />
                )}
                {enabled || (
                    <XMarkIcon className={iconClasses} aria-disabled={disabled} />
                )}
            </span>
        )}
    </HeadlessSwitch>);
1};

export default Switch;