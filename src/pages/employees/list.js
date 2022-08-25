import './list.css'

function List(){
    return(
        <div>
            <table>
                <tr>
                    <th>Emp.ID </th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Gender</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>N:001 </td>
                    <td>Rangabashyam </td>
                    <td> ranga@gmail.com</td>
                    <td>Male </td>
                    <td>Active </td>
                </tr>
                <tr>
                    <td>N:002</td>
                    <td>Hari </td>
                    <td>hari@gmail.com </td>
                    <td> Male</td>
                    <td> Active</td>
                </tr>
                <tr>
                    <td>N:003</td>
                    <td>Priya </td>
                    <td>priya@gmail.com </td>
                    <td>Female </td>
                    <td>Inactive </td>
                </tr>
                <tr>
                    <td>N:003</td>
                    <td>Shrinithi </td>
                    <td>shri@gmail.com </td>
                    <td>Female </td>
                    <td>Inactive </td>
                </tr>
                <tr>
                    <td>N:005</td>
                    <td>Kalai </td>
                    <td>kalai@gmail.com </td>
                    <td>Female</td>
                    <td>Active</td>
                </tr>
            </table>
        </div>
    )
}

export default List;