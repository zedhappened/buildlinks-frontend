import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/card/Card';

const Login = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const create = searchParams.get('create') === "true";

    return (
        <div className='flex items-center justify-center py-20'>
            <Card className="flex-1 min-w-72 max-w-xl">
                Hello
            </Card>
        </div>
    )
}

export default Login