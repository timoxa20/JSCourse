import {classNames} from "../../helpers/ClassNames/ClassNames.ts";
import cls from './Navbar.module.scss'
import {Button} from "../MyButton/MyButton.tsx";
import {MyInput} from "../MyInput/MyInput.tsx";
import {Menu} from "../Menu/Menu.tsx";
import React, {useEffect, useState} from "react";
import {useInput} from "../../hooks/useInput/useInput.tsx";
import useDebounce from "../../hooks/useDebounce/useDebounce.tsx";
import {useDispatch} from "react-redux";
import {setCity} from "../../store/reducer/AuthSlice.ts";
import {useAppSelector} from "../../hooks/redux.ts";
import {fetchCityApi} from "../../api/CityApi/FetchCity.ts";

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

    const search = useInput({
        initialValue: '',
        validations: {}
    })
    const debounce = useDebounce(search.value)
    const [menuActiv, setMenuActiv] = useState(true)
    const [showDropdaun, setshowDropdaun] = useState<showDropdaunCity | null>(null)
    const dispatch = useDispatch()
    const city = useAppSelector(state => state.city.city)
    const cityName = useAppSelector(state => state.auth.city)
console.log(city)
    useEffect(() => {
        const params = {
            name: cityName,
            limit:4,
        }
        dispatch(fetchCityApi(params))
    }, [search, debounce, cityName]);

    // @ts-ignore


    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        search.onChange(e);
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
                    value={cityName}
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



