import './style/index.scss'
import AppRoute from "./route/ui/AppRoute.tsx";
import {Suspense} from "react";
import {classNames} from "./helpers/ClassNames/ClassNames.ts";
import {useTheme} from "./hooks/useTheme/useTheme.tsx";
import {Loader} from "./components/Loader/Loader.tsx";



function App() {
    const {theme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])} >
            <Suspense fallback={<Loader/>}>
                    <AppRoute/>
            </Suspense>
        </div>
    )
}

export default App
