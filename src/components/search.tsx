/** 3. Search component */

import { IoSearch } from "react-icons/io5"

// export this to /contacts/page.tsx
export const Search = () => {
  return (
    <div className="relative flex flex-1"> {/* create search input along with icon */}
        <input 
            type="text" 
            className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm" 
            placeholder="Search..."
        />
        <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" /> {/* react ionic icon */}
    </div>
  );
};
