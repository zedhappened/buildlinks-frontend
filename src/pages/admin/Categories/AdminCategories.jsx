import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

export const adminCategoriesLoader = async ({ params, request }) => {};

export const adminCategoriesAction = async ({ params, request }) => {};

const AdminCategories = () => {
  const { categories, pages } = useLoaderData();
  let [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;
  return (
    <>
      <div className="flex h-24 justify-center items-center">
        <p className="text-3xl md:text-4xl font-alfaSlabOne text-primary">
          Product Categories
        </p>
      </div>
    </>
  );
};

export default AdminCategories;
