import { ReactElement} from "react";
import {LoginPage} from "../pages/LoginPages";
import {MainPage} from "../pages/MainPages";

export interface IRoute {
    path: string,
    element:  ReactElement
}



const loginPageComponent = <LoginPage />
const mainPageComponent = <MainPage />

export const publicRoute: IRoute[] = [
    {path: '/login', element: loginPageComponent}
]

export const privatRoute: IRoute[] = [
    {path: '/', element: mainPageComponent}
]




