import AuthProvider from "./Auth";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => (
  <AuthProvider>{children}</AuthProvider>
);

export default ContextProvider;
