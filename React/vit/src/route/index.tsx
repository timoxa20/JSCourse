import { ReactElement} from "react";
import {LoginPage} from "../pages/LoginPages";
import {MainPage} from "../pages/MainPages";

export interface IRoute {
    path: string,
    element:  ReactElement
}

export const publicRoute: IRoute[] = [
    {path: '/login', element:  <LoginPage />}
]

export const privateRoute: IRoute[] = [
    {path: '/', element: <MainPage />}
]




