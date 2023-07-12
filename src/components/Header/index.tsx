import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>Logo</div>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
