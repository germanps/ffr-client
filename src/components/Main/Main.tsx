import * as React from "react";
import { IMainProps } from "./IMainProps";
import "./Main.scss";
import Header from "../Header/Header";
import Board from "../Board/Board";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";


export default class Main extends React.Component<IMainProps, {}> {
    public render(): React.ReactElement<IMainProps> {
        return(
            <div className="main">
                <HashRouter>
                    <>
                        <Header title="Fighting Fantasy Roller"/>
                        <Switch>
                            <Route exact path="/" component={Board} />
                        </Switch>
                    </>
                </HashRouter>
            </div>
        );
    }
}