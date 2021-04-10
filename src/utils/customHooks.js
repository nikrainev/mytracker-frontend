import React, { useEffect, useState } from "react";

const useDocTitle = title => {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
    return (()=>{
        document.title = ''
    })
  }, [docTitle]);

  return [docTitle, setDocTitle];
};

export {useDocTitle};