import React from "react"
import Search from "./Search";
import DebouncedSearch from "./DebouncedSearch";
import FetchedSearch from "./FetchedSearch";

const SearchAll = () =>{
    return(
        <div>
 <div style={{display:'flex', justifyContent:'space-around'}}>
      <div><Search /></div>
      <div><DebouncedSearch /></div>
      <div><FetchedSearch /></div>
    </div>
        </div>
    )
}
export default SearchAll;