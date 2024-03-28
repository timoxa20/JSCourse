import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './MyAvatar.module.scss'

interface MyAvatarProps {
    className?: string;
}

export const MyAvatar = ({className}: MyAvatarProps) => {
    return (
        <div className={classNames(cls.MyAvatar, {}, [className])}>


        </div>
    );
};



