import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    console.log(error)
    return (
        <main className="animated-bg flex flex-col text-center justify-center">
            
            <h1 className="font-bold text-6xl py-6 font-alfaSlabOne text-primary">Oops!</h1>
            <p className="text-black text-2xl font-bold">Sorry, an unexpected error has occurred.</p>
            <p className="text-xl text-secondary">
                Error Message: "{error.statusText || error.message }"
            </p>

            <div className='mt-4'>
                <button type='button' onClick={() => navigate(-1)} className="underline text-black text-sm">Click here to go back to the previous page</button>
            </div>

        </main>
    );
}

export default ErrorPage;