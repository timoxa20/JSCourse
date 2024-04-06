import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoute, publicRoute} from "../index.tsx";
import {useAppSelector} from "../../hooks/redux.ts";


const AppRoute = () => {
    const auth = useAppSelector(state => state.auth.auth)
    return (
        <Routes>
            {(auth ? privateRoute : publicRoute).map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={auth ? "/" : "/login"} />}
            />
        </Routes>
    );
};

export default AppRoute;