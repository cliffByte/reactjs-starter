import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const SidebarContext = createContext<any>(false);

const SidebarProvider = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
export default SidebarProvider;
