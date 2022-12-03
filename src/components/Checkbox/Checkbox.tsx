import styles from "./Checkbox.module.css";
import { Check } from "phosphor-react";

interface CheckboxPropsInterface {
    value: boolean;
    onChange: (value: boolean) => void;
}
export function Checkbox({ value, onChange }: CheckboxPropsInterface) {
    function handleChange() {
        onChange(!value);
    }

    return (
        <div
            className={value ? styles.checked : styles.unchecked}
            onClick={handleChange}
        >
            {value && <Check size={12} />}
        </div>
    );
}
