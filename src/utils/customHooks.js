import React, { useEffect, useState, useRef } from "react";

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


