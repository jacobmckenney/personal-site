import { TooltipProvider } from "@radix-ui/react-tooltip";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <TooltipProvider>
      <Component {...pageProps} />
    </TooltipProvider>
  );
};

export default MyApp;
