import { Button } from "./styles";

function ButtonComponent({
  children,
  isDisabled,
}: {
  children: React.ReactNode;
  isDisabled?: boolean;
}) {
  return <Button isDisabled={isDisabled}>{children}</Button>;
}

export default ButtonComponent;
