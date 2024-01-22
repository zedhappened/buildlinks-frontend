import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import { Form, useLoaderData, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { colorCreateAPI, colorEditAPI, colorGetByIdAPI } from "../../../api/api";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import ColorCard from "../../../components/card/ColorCard";
import FileInput from "../../../components/input/FileInput";
import Input from "../../../components/input/Input";

export const adminColorCreateLoader = async ({ params, request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (id) {
    try {
      const { data } = await colorGetByIdAPI(id);
      return { color: data, error: false };
    } catch (error) {
      return { error: true, message: error.message }
    }
  }
  return { error: false }
}

export const adminColorCreateAction = async ({ params, request }) => {
  const formData = await request.formData();
  const entries = Object.fromEntries(formData);

  switch (request.method) {
    case "POST": {
      try {
        const response = await colorCreateAPI(entries);
        return { ...response.data };
      } catch (error) {
        toast.error(error.response.data.message);
        return { error: true };
      }
    }
    case "PATCH": {
      try {
        const response = await colorEditAPI(entries.id, entries);
        return { ...response.data };
      } catch (error) {
        toast.error(error.response.data.message);
        return { error: true };
      }
    }
    default: {
      throw new Response("", { status: 405 });
    }
  }
};

const AdminColorCreate = () => {
  const { color } = useLoaderData();

  const [colorName, setColorName] = useState(color?.colorName ?? "");
  const [colorImage, setColorImage] = useState(color?.colorImage ?? "");

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');

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
  };
  return (
    <>
      <div className="flex h-24 justify-center items-center border-b-2">
        <p className="text-3xl md:text-4xl font-alfaSlabOne text-primary">
          Add Color
        </p>
      </div>
      <div className="flex justify-center">
        <Card className="flex-1 max-w-2xl my-8">
          <Form method={id ? "PATCH" : "POST"} className="px-2 py-4 md:px-8 flex flex-col gap-4">
            <div className="flex flex-row gap-2 sm:gap-4">
              <div className="basis-2/3 md:basis-1/2 flex flex-col">
                <Input
                  name="colorName"
                  onChange={(e) => {
                    setColorName(e.target.value);
                  }}
                  placeholder="Color Name"
                  required={true}
                  defaultValue={color?.colorName ?? ""}
                />
                <Input
                  required={true}
                  name="colorCode"
                  placeholder="Color Code"
                  defaultValue={color?.colorCode ?? ""}
                />
                <Input
                  readOnly={true}
                  name="colorImage"
                  value={colorImage}
                  className="hidden"
                />
                <FileInput required={true} onChange={fileChangedHandler} />
              </div>
              <div className="basis-1/3 md:basis-1/2 flex justify-center items-center ">
                <ColorCard colorImage={colorImage} colorName={colorName} />
              </div>
            </div>
            <div className="flex justify-center">
              <Button name="id" value={id} className="btn-primary w-48">Submit</Button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default AdminColorCreate;
