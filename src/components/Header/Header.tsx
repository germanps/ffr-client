import * as React from "react";
import { IHeaderProps } from "./IHeaderProps";
import "./Header.scss";
const reactLogo = require("./../../assets/img/FFmain.gif");
import { Link } from "react-router-dom";

export default class Header extends React.Component<IHeaderProps, {}> {
    public render(): React.ReactElement<IHeaderProps> {
        return (
            <header className="header">
                <div className="logoWrapper">
                    <div className="logo">
                        <Link to="/">
                            {/* <img src={reactLogo}/> */}
                        </Link>
                    </div>
                    {/* <h1 className="main-title">{this.props.title}</h1> */}
                </div>
                <nav>
                    <ul>
                        <li>Characters</li>
                        <li>Fightings</li>
                    </ul>
                    <i className="ra ra-perspective-dice-three ra-lg"></i>
                    {/* <Link to="/user/new" className="btn">Nuevo usuario</Link>
                    <Link to="/book/new" className="btn">Nuevo libro</Link> */}
                </nav>
            </header>
        );
    }
} 