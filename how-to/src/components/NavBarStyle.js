import styled from "styled-components";

export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderTitleTop = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  letter-spacing: 0.85rem;
  line-height: 2rem;
  font-size: 1.5rem;
  color: black;
`;

// export const HeaderTitleBottom = styled.div`
//   font-family: 'Playfair Display', serif;
//   color: #fff9ef;
//   letter-spacing: .75rem;
//   font-size: 1.75rem;
// `;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: beige;
  padding: 3%;
  a {
    padding: 0.5rem;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: "Open Sans Condensed", sans-serif;
  }
  a:hover {
    color: #757c57;
    background-color: #fff9ef;
    border-radius: 2px;
    transition: all 250ms ease-in-out;
  }
`;
