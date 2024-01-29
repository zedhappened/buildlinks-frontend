import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import {
  Form,
  redirect,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  categoryCreateAPI,
  categoryEditAPI,
  categoryGetAllAPI,
  categoryGetByIdAPI,
} from "../../../api/api";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import Checkbox from "../../../components/input/Checkbox";
import FileInput from "../../../components/input/FileInput";
import Input from "../../../components/input/Input";
import Textbox from "../../../components/input/Textbox";

export const adminCategoryCreateLoader = async ({ params, request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  try {
    const { data: parentCategories } = await categoryGetAllAPI();

    if (id) {
      const { data: category } = await categoryGetByIdAPI(id);
      return { category, categories: parentCategories };
    }

    return { category: {}, categories: parentCategories };
  } catch (error) {
    throw new Response("", { status: 500, statusText: error.message });
  }
};

export const adminCategoryCreateAction = async ({ params, request }) => {
  const formData = await request.formData();
  const entries = Object.fromEntries(formData);

  if (entries.topCategory === "on") {
    entries.topCategory = true;
  }
  if (entries.showOnHome === "on") {
    entries.showOnHome = true;
  }
  if (entries.parent === "") {
    entries.parent = null;
  }

  switch (request.method) {
    case "POST": {
      try {
        await categoryCreateAPI(entries);
        toast.success("Created Successfully!");
        return redirect("/admin/categories");
      } catch (error) {
        toast.error(error.response.data.message);
        return { error: true };
      }
    }
    case "PATCH": {
      try {
        await categoryEditAPI(entries.id, entries);
        toast.success("Updated Successfully!");
        return redirect("/admin/categories");
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

const AdminCategoryCreate = () => {
  const { category, categories } = useLoaderData();

  const optionList = categories.map((cat) => {
    return { value: cat._id.toString(), label: cat.name };
  });

  const [image, setImage] = useState(category.image || "");
  const [parent, setParent] = useState(
    optionList.find((option) => option.value === category.parent) || ""
  );

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fileChangedHandler = async (e) => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          192,
          240,
          "JPEG",
          100,
          0,
          (uri) => {
            setImage(uri);
          },
          "base64",
          192,
          240
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  function handleSelect(data) {
    setParent(data || "");
  }

  return (
    <>
      <div className="flex h-24 justify-center items-center border-b-2">
        <p className="text-3xl md:text-4xl font-alfaSlabOne text-primary">
          Add Category
        </p>
      </div>
      <div className="flex justify-center">
        <Card className="flex-1 max-w-2xl my-8">
          <Form
            method={id ? "PATCH" : "POST"}
            className="px-2 py-4 md:px-8 flex flex-col gap-4"
          >
            <div className="md:basis-1/2 flex flex-col pt-8 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:gap-2 ">
                <Input
                  name="name"
                  placeholder="Category Name"
                  required={true}
                  defaultValue={category?.name ?? ""}
                  className="sm:basis-1/2"
                />
                <Input
                  readOnly={true}
                  name="parent"
                  value={parent.value || ""}
                  className="hidden"
                />
                <Select
                  options={optionList}
                  placeholder="Parent Category"
                  value={parent}
                  onChange={handleSelect}
                  isSearchable={true}
                  isClearable={true}
                  className="my-2 shadow-inner text-sm basis-1/2"
                />
              </div>

              <Input
                readOnly={true}
                name="image"
                value={image}
                className="hidden"
              />
              <FileInput onChange={fileChangedHandler} />
              <Textbox
                name="description"
                placeholder="Description"
                defaultValue={category.description || ""}
              />

              <div className="flex flex-row sm:gap-2 ">
                <Checkbox
                  label={"Top Category"}
                  name="topCategory"
                  className="basis-1/2"
                  defaultChecked={category.topCategory}
                />
                <Checkbox
                  label={"Show on Home"}
                  name="showOnHome"
                  className="basis-1/2"
                  defaultChecked={category.showOnHome}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button name="id" value={id} className="btn-primary w-48">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default AdminCategoryCreate;
