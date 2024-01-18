import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import Input from '../../../components/input/Input'
import Card from '../../../components/card/Card'
import Button from '../../../components/button/Button'
import Resizer from "react-image-file-resizer";
import { toast } from 'react-toastify'

export const adminColorCreateAction = async ({ params, request }) => {
    const formData = await request.formData();
    const entries = Object.fromEntries(formData);

    try {

        if (entries.password !== entries.confirmPassword) {
            toast.error("Passwords do not match")
            return { error: true }
        }

        return ({ error: false })

    } catch (error) {
        toast.error(error.response.data.message)
        return { error: true }
    }
}

const AdminColorCreate = () => {

    const [colorCode, setColorCode] = useState('');
    const [colorImage, setColorImage] = useState('');

    const fileChangedHandler = async (e) => {
        var fileInput = false;
        if (e.target.files[0]) {
            fileInput = true;
        }
        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    e.target.files[0],
                    96,
                    192,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        setColorImage(uri);
                    },
                    "base64",
                    48,
                    96
                );
            } catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <>
            <div className='flex h-24 justify-center items-center border-b-2'>
                <p className='text-3xl md:text-4xl font-alfaSlabOne text-primary'>Add Color</p>
            </div>
            <div className="flex justify-center">
                <Card className="flex-1 max-w-2xl my-8">
                    <Form method='post' className="px-2 py-4 md:px-8 flex flex-col gap-4">
                        <div className="flex flex-row gap-2 sm:gap-4">
                            <div className="basis-2/3 md:basis-1/2 flex flex-col">
                                <Input name="colorName" placeholder="Color Name" />
                                <Input name="colorCode" onChange={(e) => { setColorCode(e.target.value) }} placeholder="Color Code" />
                                <Input name="colorImage" value={colorImage} className="hidden" />
                                <Input onChange={fileChangedHandler} type="file" />
                            </div>
                            <div className="basis-1/3 md:basis-1/2 flex justify-center items-center ">
                                <div className="bg-white h-20 w-24 border-2 rounded-b-md">
                                    <div className="h-12 bg-slate-400">
                                        <img className='h-full w-full object-cover' src={colorImage} alt='' />
                                    </div>
                                    <p className='h-8 flex items-center justify-center text-xs'>{colorCode}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button className="btn-primary w-48">Submit</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </>
    )
}

export default AdminColorCreate