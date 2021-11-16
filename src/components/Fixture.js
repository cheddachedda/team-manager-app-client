import React, { Component } from "react";
import '../css/Game.css'
export default class Fixture extends Component {
    render() {
        return(
            <div>
                <h2>Fixtures</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>W</th>
                            <th>L</th>
                            <th>D</th>
                            <th>F</th>
                            <th>PF</th>
                            <th>PA</th>
                            <th>P%</th>
                            <th>SF</th>
                            <th>SA</th>
                            <th>S%</th>
                            <th>M%</th>
                        </tr>
                    </thead>
                        <tr>
                            <td>Team A</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>          
                </table>
            </div>
        );
    }
}