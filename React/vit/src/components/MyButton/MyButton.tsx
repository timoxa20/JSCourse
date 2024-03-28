import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import {Theme} from "../ThemeContext/ThemeContext.tsx";



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: Theme;
}

export const Button: FC<ButtonProps> = (props) => {

    const {
        children,
        theme,
        className,
        type,
        ...otherProps
    } = props;

    return (
        <button
            type={type}
            className={classNames('', {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};



