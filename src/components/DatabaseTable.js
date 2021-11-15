import './DatabaseTable.css';

const DatabaseTable = (props) => {

    const tableHeaders = Object.keys(props.data[0]);
    console.log(tableHeaders);
    const renderRow = function (modelData) {        
        return (
            <tr>
                {tableHeaders.map((header) => <td>{modelData[header]}</td>)}
            </tr>
        )
    }

    

    return (
        <table>
            <thead>
                <tr>
                    {tableHeaders.map((header) => <th>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.data.map((row) => renderRow(row))}
            </tbody>
        </table>
    );
}

export default DatabaseTable;