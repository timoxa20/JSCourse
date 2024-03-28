import {Navigate, Route, Routes} from "react-router-dom";
import {privatRoute, publicRoute} from "../index.tsx";
import {useAppSelector} from "../../hooks/redux.ts";


const AppRoute = () => {
    const {auth} = useAppSelector(state => state.authReducer)
    return (
        <Routes>
            {auth
                ? privatRoute.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))
                : publicRoute.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))
            }
            {auth
                ? <Route path="*" element={<Navigate to="/" />} />
                : <Route path="*" element={<Navigate to="/login" />} />
            }
        </Routes>
    );
};

export default AppRoute;