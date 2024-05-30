/** 1. Main page of /contacts url */

import { ContactTable } from "@/components/contact-table"
import { Search } from "@/components/search";
import { CreateButton } from "@/components/button";

const Contacts = ({
  searchParams
}:{
  searchParams?:{
    query?: string;
    page?: string;
  }
}) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="max-w-screen-md mx-auto mt-5">
        <div className="flex item-center justify-between gap-1 mb-5"> {/* search and create components */}
          <Search /> {/* search component (from /components/search.tsx) */}
          <CreateButton /> {/* create button (from /components/button.tsx) */}
        </div>
        <ContactTable query={query} currentPage={currentPage}/> {/* table component (from /components/contact-table.tsx) */}
    </div>
  );
};

export default Contacts