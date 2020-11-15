import styled from 'styled-components';

const NavContainer = styled.nav`
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  & div ul li a {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    text-decoration: none;

    :not(:last-child) {
      margin-right: 20px;
    }

    &.active {
      background-color: #ea454b;
    }
  }
`;

export default NavContainer;
