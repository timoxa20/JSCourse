import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './Navbar.module.scss'
import {Button} from "../MyButton/MyButton.tsx";
import {MyInput} from "../MyInput/MyInput.tsx";
import {Menu} from "../Menu/Menu.tsx";
import React, {useState} from "react";
import {useInput} from "../../hooks/useInput/useInput.tsx";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce/useDebounce.tsx";
import {useDispatch} from "react-redux";
import {setCity} from "../../store/reducer/AuthSlice.ts";
import {useAppSelector} from "../../hooks/redux.ts";

interface NavbarProps {
    className?: string;
}

interface ICity {
    name: string
    country: string
}

interface showDropdaunCity {
    data: ICity[]
}

export const Navbar = ({className}: NavbarProps) => {

    const path = 'https://api.api-ninjas.com/v1/city?limit=4&name='
    const search = useInput({
        initialValue: '',
        validations: {}
    })
    const [menuActiv, setMenuActiv] = useState(true)
    const [showDropdaun, setshowDropdaun] = useState<showDropdaunCity | null>(null)
    const dispatch = useDispatch()
    const city = useAppSelector(state => state.authReducer.city)

    const searchCity = async (query: string) => {
        try {
            const response = await axios({
                method: 'GET',
                url: path + query,
                headers: { 'X-Api-Key': 'qBp16x6JNuuqybKVoQWFdQ==g593kyubtOmB5XnE'},
            });
            setshowDropdaun(response);
        } catch (error) {
            console.error('Error fetching city:', error);
        }
    };

    // @ts-ignore
    const debounceSearch = useDebounce(searchCity, 0)

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        search.onChange(e);
        debounceSearch(e.target.value);
        dispatch(setCity(e.target.value))
    }

    const onClickDropDaun = (name: string) => {
        dispatch(setCity(name))
        setshowDropdaun(null);
    };
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={() => setMenuActiv(!menuActiv)}
                className={cls.ButtonBtn}
            >
                <span/>
            </Button>
            <div className={cls.Dropdaun}>
                <MyInput
                    className={cls.Input}
                    type={'search'}
                    value={city}
                    onChange={onChangeValue}
                />
                {showDropdaun?.data && showDropdaun.data.length > 0 && (
                    <div className={cls.DropdaunMenu}>
                        {showDropdaun.data.map((elem) => (
                            <div className={cls.DropdaunMenuList} key={elem.country}>
                                <Button
                                    onClick={() => onClickDropDaun(elem.name)}
                                    className={cls.Button}
                                >{elem.name}</Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Menu active={menuActiv} setActive={setMenuActiv}/>
        </div>
    );
};



