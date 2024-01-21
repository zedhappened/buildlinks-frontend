import {
  faAngleLeft,
  faAngleRight,
  faExclamationTriangle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { colorDeleteAPI, colorGetAPI } from "../../../api/api";
import Button from "../../../components/button/Button";
import AdminColorCard from "../../../components/card/AdminColorCard";
import SearchBox from "../../../components/input/SearchBox";

export const adminColorLoader = async ({ params, request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  let search = url.searchParams.get("search");

  try {
    const response = await colorGetAPI(page > 1 ? page : 1, search);
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
      return { error: false };
    }
    default: {
      throw new Response("", { status: 405 });
    }
  }
}

const AdminColors = () => {
  const { colors, pages } = useLoaderData();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div className="flex h-24 justify-center items-center">
        <p className="text-3xl md:text-4xl font-alfaSlabOne text-primary">
          Product Colors
        </p>
      </div>
      <div className="flex flex-row px-2 md:px-8 gap-2 md:gap-4 lg:gap-8 border-y-2 bg-neutral">
        <SearchBox defaultValue={searchParams.get("search") ?? ""} className="basis-4/5" />
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
        <div className="flex flex-col justify-center items-center py-20">
          <h1 className="font-bold text-6xl py-2 text-primary">
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </h1>
          <p className="font-roboto text-black text-2xl font-bold text-center px-4">
            No Colors Found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
          {colors.map((color) => (
            <div className="flex justify-center" key={color._id}>
              <AdminColorCard color={color} />
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-row-reverse px-2 md:px-8 gap-2 md:gap-4 lg:gap-8 border-y-2 bg-neutral">
        <div className="flex flex-row-reverse gap-2">
          <Button
            onClick={() => {
              setSearchParams({
                page: parseInt(searchParams.get("page") ?? 1) + 1,
                search: searchParams.get("search"),
              });
            }}
            className={
              "btn-secondary w-20" +
              (searchParams.get("page") >= pages
                ? " opacity-60 pointer-events-none"
                : "")
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
          <Button
            onClick={() => {
              setSearchParams({
                page: searchParams.get("page") - 1,
                search: searchParams.get("search"),
              });
            }}
            className={
              "btn-secondary w-20" +
              (searchParams.get("page") > 1
                ? ""
                : " opacity-60 pointer-events-none")
            }
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
        </div>
        <div className="flex items-center">Pages: {pages}</div>
        <div className="flex items-center">
          Current Page:{" "}
          {searchParams.get("page") > 0 ? searchParams.get("page") : 1}
        </div>
      </div>
    </>
  );
};

export default AdminColors;
