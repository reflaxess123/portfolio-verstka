/// <reference types="vite/client" />

declare module '*.svg?react' {
    import * as React from 'react';
    const value: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default value;
}
