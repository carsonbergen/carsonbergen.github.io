import React from "react";

import Warning from "../components/Warning";

function Blog() {
  return(
    <>
      <div className="flex flex-col space-y-4 items-center">
          <Warning warning="Under construction! Come back later."/>
      </div>
    </>
  );
}

export default Blog;