import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./header/Header";

export const RootLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
