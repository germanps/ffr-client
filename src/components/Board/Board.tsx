import * as React from "react";
import { IBoardProps } from "./IBoardProps";
import "./Board.module.scss";

export default class Board extends React.Component<IBoardProps, {}> {
    public render(): React.ReactElement<IBoardProps> {
        return(
            <div className="board">
                Board
            </div>
        );
    }
}