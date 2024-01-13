import React from 'react';
import { Form, useSearchParams } from 'react-router-dom';
import { signIn, signUp } from '../../api/api';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import { toast } from "react-toastify"


export const loginAction = async ({ params, request }) => {
    const formData = await request.formData();
    const entries = Object.fromEntries(formData);

    try {

        if (entries.intent === "sign-in") {

            const res = await signIn(entries)

            return ({ ok: true })

        } else if (entries.intent === "sign-up") {

            if (entries.password !== entries.confirmPassword) {
                toast.error("Passwords do not match")
                return { ok: false }
            }

            const res = await signUp(entries)
            return ({ ok: true })
        }


    } catch (error) {
        toast.error(error.response.data.message)
        return { ok: false }
    }


    throw new Response("No intent", { status: 400 });
}

const Login = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const create = searchParams.get('create') === "true";

    return (
        <>
            {create ?
                (
                    <Form method='post' className='flex items-center justify-center py-20'>
                        <Card className="flex-1 flex flex-col min-w-72 sm:max-w-lg max-w-md py-6 sm:px-10 mx-4">
                            <h1 className='text-center text-3xl font-alfaSlabOne text-primary pb-3'>Register</h1>
                            <Input name="email" placeholder="Email" />
                            <Input name="password" type="password" placeholder="Password" />
                            <Input name="confirmPassword" type="password" placeholder="Confirm Password" />
                            <div className='py-1 text-center'>
                                <button className='text-sm underline hover:text-primaryHover' onClick={() => setSearchParams("")}>Already have an account? Sign in!</button>
                            </div>
                            <div className='flex flex-col items-center pt-1'>
                                <Button name="intent" value="sign-up" className="btn-primary w-28">Sign Up</Button>
                            </div>
                        </Card>
                    </Form>
                ) : (
                    <Form method='post' className='flex items-center justify-center py-20'>
                        <Card className="flex-1 flex flex-col min-w-72 sm:max-w-lg max-w-md py-6 sm:px-10 mx-4">
                            <h1 className='text-center text-3xl font-alfaSlabOne text-primary pb-3'>Login</h1>
                            <Input name="email" placeholder="Email" />
                            <Input name="password" type="password" placeholder="Password" />
                            <div className='py-1 text-center'>
                                <button className='text-sm underline hover:text-primaryHover' onClick={() => setSearchParams("create=true")}>Don't have an account? Register now!</button>
                            </div>
                            <div className='flex flex-col items-center pt-1'>
                                <Button name="intent" value="sign-in" className="btn-primary w-28">Sign In</Button>
                            </div>
                        </Card>
                    </Form>
                )}

        </>
    )
}

export default Login