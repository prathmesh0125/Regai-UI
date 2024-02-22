import React from "react";

const Search = () => {
  return (
    <div style={{width:"100%" }}>
      <nav class="navbar bg-body-tertiary" style={{display:"flex",justifyContent:"space-between"}}>
      <div class="container-fluid">
  <a class="navbar-brand mb-6" style={{marginRight:"60px",fontWeight:"bolder"}}>Recomedation</a>
  <form class="d-flex" role="search">
    <input style={{marginLeft:"0px"}}
      class="form-control me-7"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
  </form>
</div>

      </nav>
    </div>
  );
};

export default Search;
