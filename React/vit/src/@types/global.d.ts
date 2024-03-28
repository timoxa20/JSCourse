import { defaultNS } from '../components/i18n/i18n.ts';
import resources from './resurses.ts';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: typeof resources;
    }
}


declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
