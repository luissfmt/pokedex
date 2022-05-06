import styled from "styled-components";
import { dark_yellow, light_yellow, dark_blue } from "../../../constants/colors";

export const HeaderContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 20px;

    img {
        width: 200px;
    };

    button {
        border: none;
        background-color: ${dark_blue};
        padding: 10px;
        border-radius: 7px;
        color: ${light_yellow};

        &:hover {
            border: 1px solid ${dark_yellow};
        };
    };
`;