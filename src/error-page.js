import React from 'react';
import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <main className="animated-bg flex items-center justify-center">
            <div className="flex-column text-center">
                <h1 className="font-bold text-6xl py-6 font-alfaSlabOne text-primary">Oops!</h1>
                <p className="font-roboto text-black text-2xl font-bold">Sorry, an unexpected error has occurred.</p>
                <p className="font-roboto text-xl text-secondary">
                    Error Message: "{error.statusText || error.message}"
                </p>
            </div>
        </main>
    );
}

export default ErrorPage;