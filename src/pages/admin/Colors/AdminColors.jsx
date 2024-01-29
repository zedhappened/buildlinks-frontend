import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { colorDeleteAPI, colorGetAPI } from "../../../api/api";
import Button from "../../../components/button/Button";
import AdminColorCard from "../../../components/card/AdminColorCard";
import SearchBox from "../../../components/input/SearchBox";
import NoResourceFound from "../../../components/util/NoResourceFound";
import PaginationBar from "../../../components/util/PaginationBar";

export const adminColorLoader = async ({ params, request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const searchValue = url.searchParams.get("search") || "";

  try {
    const response = await colorGetAPI(page, searchValue);
    return { ...response.data };
  } catch (error) {
    throw new Response("", { status: 500, statusText: error.message });
  }
};

export const adminColorAction = async ({ params, request }) => {
  const formData = await request.formData();
  const entries = Object.fromEntries(formData);
  switch (request.method) {
    case "DELETE": {
      await colorDeleteAPI(entries.id);
      toast.success("Deleted Successfully");
      return { error: false };
    }
    default: {
      throw new Response("", { status: 405 });
    }
  }
};

const AdminColors = () => {
  const { colors, pages } = useLoaderData();
  let [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;
  return (
    <>
      <div className="flex h-24 justify-center items-center">
        <p className="text-3xl md:text-4xl font-alfaSlabOne text-primary">
          Product Colors
        </p>
      </div>
      <div className="flex flex-row px-2 md:px-8 gap-2 md:gap-4 lg:gap-8 border-y-2 bg-neutral">
        <SearchBox defaultValue={searchValue} className="basis-4/5" />
        <Link className="basis-1/5 flex" to={"create"}>
          <Button className="hidden md:block btn-primary flex-1">
            Add Color
          </Button>
          <Button className="md:hidden btn-primary flex-1">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Link>
      </div>

      {colors.length === 0 ? (
        <NoResourceFound resource={"Colors"} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 p-8">
          {colors.map((color) => (
            <div className="flex justify-center" key={color._id}>
              <AdminColorCard color={color} />
            </div>
          ))}
        </div>
      )}

      <PaginationBar
        setSearchParams={setSearchParams}
        searchValue={searchValue}
        currentPage={currentPage}
        pages={pages}
      />
    </>
  );
};

export default AdminColors;
