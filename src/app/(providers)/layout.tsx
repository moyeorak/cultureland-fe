import { AuthProvider } from "@/contexts/auth.context/auth.context";
import { ModalProvider } from "@/contexts/modal/modal.context";
import { ReactQueryProvider } from "@/react-query";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>;
      </AuthProvider>
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
