import React from 'react'

const DashboardLayout = ({
    children
  }) => {
    return ( 
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
     );
  }
   
  export default DashboardLayout;