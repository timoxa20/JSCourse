import './style/index.scss'
import AppRoute from "./route/ui/AppRoute.tsx";
import {Suspense} from "react";
import {classNames} from "./helpers/ClassNames/ClassNames.ts";
import {useTheme} from "./hooks/useTheme/useTheme.tsx";



function App() {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])} >
            <Suspense fallback=''>
                <AppRoute/>
            </Suspense>
        </div>
    )
}

export default App
