import React, { PropsWithChildren } from 'react';

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div
      className="relative z-[2] font-[Montserrat-semi]
      overflow-hidden
      w-[100vw] !h-[100vh]
      bg-[#312E43]"
    >
      {children}
    </div>
  );
}

export default BaseLayout;
