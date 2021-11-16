import React, { Component } from "react";
import '../css/Game.css'
export default class Fixture extends Component {
    render() {
        return(
            <div>
                <h2>Fixtures</h2>
                <select name="teams" id="teams">
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                    <option value="Team C">Team C</option>
                    <option value="Team D">Team D</option>
                </select>
                <h3>Team A</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Opponent</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Venue</th>
                            <th>Team Score</th>
                            <th>Opponent Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Team A</td>
                            <td>2021-03-18</td>
                            <td>08:25:00 UTC</td>
                            <td>ABC</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Team A</td>
                            <td>2021-03-18</td>
                            <td>08:25:00 UTC</td>
                            <td>ABC</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>          
                </table>
            </div>
        );
    }
}