import React, { useState, useRef } from "react";
import NavigationBar from './NavigationBar';
import Header from './Header';

const MainLayout = (props) => {
  const [open, setOpen] = useState(false);
  const { children } = props;
  return (
    <div className="flex flex-row w-full relative h-full bg-white  overflow-y-auto">
      {/* aside*/}
      <aside className="hidden md:flex flex-col basis-[240px]">
        <NavigationBar isOpen={open} willClose={() => setOpen(false)} />
      </aside>
      {/* Header,main */}
      <div className="flex flex-col flex-grow overflow-hidden">
      {/* ? */}
      <Header openNavBar={() => setOpen(true)} />
        <main >{children}</main>
      </div>
    </div>
  );
};
export default MainLayout;
