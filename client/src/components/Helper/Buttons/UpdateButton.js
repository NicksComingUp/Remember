import React from  'react';
export  const UpdateButton  = (props)=>{
  const {masterinfo={id:null, title:null}, onClick} = props;
  return (
        <svg onClick={()=>onClick(true,masterinfo.id, masterinfo.title)}  version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
          <path fill="#ffff00" d="M2 4v14h14v-6l2-2v10h-18v-18h10l-2 2h-6zM12.3 3.7l4 4-8.3 8.3h-4v-4l8.3-8.3zM13.7 2.3l2.3-2.3 4 4-2.3 2.3-4-4z"></path>
        </svg>
  );
};
