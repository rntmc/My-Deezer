import styled from "styled-components";

export const Container = styled.header`
  height: 104px;
  width: 100%;
  
  display: grid;
  grid-template-columns: 196px auto 180px;
  align-items:center;
  gap: 16px;
  
  padding: 24px 124px;
  
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  .buscar {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
`;

export const Profile = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({theme}) => theme.COLORS.CAKE_200};
    font-size: 32px;
    margin-right: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    > span {
      font-size: 24px;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD};
    }
    
    > strong {
      font-size: 12px;
      color: ${({theme}) => theme.COLORS.CAKE_200};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
      align-self: flex-end;
    }
  }
`;