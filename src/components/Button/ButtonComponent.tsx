import { Button } from "./styles";

function ButtonComponent({ children }: { children: React.ReactNode }) {
  return <Button>{children}</Button>;
}

export default ButtonComponent;
