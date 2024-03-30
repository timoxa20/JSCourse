import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './Navbar.module.scss'
import {Button} from "../MyButton/MyButton.tsx";
import {MyInput} from "../MyInput/MyInput.tsx";
import {Menu} from "../Menu/Menu.tsx";
import {useState} from "react";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const [menuActiv, setMenuActiv] = useState(false)
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={() => setMenuActiv(!menuActiv)}
                className={cls.ButtonBtn}
            >
                <span/>
            </Button>
            <MyInput type={'search'}/>
            <Menu active={menuActiv} setActive={setMenuActiv}/>
        </div>
    );
};



