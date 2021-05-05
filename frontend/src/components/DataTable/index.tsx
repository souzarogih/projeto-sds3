const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>25007.50</td>
                    </tr>
                    <tr>
                        <td>13/03/2021</td>
                        <td>Paulo</td>
                        <td>1017</td>
                        <td>152</td>
                        <td>13000.00</td>
                    </tr>
                    <tr>
                        <td>29/02/2021</td>
                        <td>Marcos</td>
                        <td>47</td>
                        <td>12</td>
                        <td>17010.00</td>
                    </tr>
                    <tr>
                        <td>07/01/2021</td>
                        <td>Pedro</td>
                        <td>19</td>
                        <td>7</td>
                        <td>16017.00</td>
                    </tr>
                    <tr>
                        <td>19/12/2020</td>
                        <td>João</td>
                        <td>720</td>
                        <td>75</td>
                        <td>12000.05</td>
                    </tr>
                    <tr>
                        <td>05/11/2020</td>
                        <td>Thiago</td>
                        <td>340</td>
                        <td>51</td>
                        <td>15020.10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;