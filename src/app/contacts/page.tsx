/** 1. Main page of /contacts url */

import { ContactTable } from "@/components/contact-table"
import { Search } from "@/components/search";
import { Pagination } from "@/components/pagination";
import { CreateButton } from "@/components/button";
import { getContactPages } from "@/lib/data";

const Contacts = async ({
  searchParams
}:{
  searchParams?:{
    query?: string;
    page?: string;
  }
}) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getContactPages(query)

  return (
    <div className="max-w-screen-md mx-auto mt-5">
        <div className="flex item-center justify-between gap-1 mb-5"> {/* search and create components */}
          <Search /> {/* search component (from /components/search.tsx) */}
          <CreateButton /> {/* create button (from /components/button.tsx) */}
        </div>
        <ContactTable query={query} currentPage={currentPage}/> {/* table component (from /components/contact-table.tsx) */}
        <div className="flex justify-center mt-4">
          <Pagination totalPages={totalPages} />
        </div>

    </div>
  );
};

export default Contacts
