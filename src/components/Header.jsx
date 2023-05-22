import logo from "../images/logo.png"
import { HeaderConteiner } from "./Header.styles"
export default function Header(){
    return(
        <HeaderConteiner>
            <img src={logo} alt="logo" />
        </HeaderConteiner>
    )
}