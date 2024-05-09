export const TaskList = ({
    list,
    handleDelete,
    handleUpdateStatus
}) => {
    return <>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Desc</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list?.length > 0 ?
                    list.map(item => {
                        return <tr>
                            <td>{item?.id}</td>
                            <td>{item?.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.status ? "complete" : "in complete"}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Delete</button> <br />
                                <label className="checkbox-container">
                                    <input onChange={() => handleUpdateStatus(item.id)} checked={item.status === 0 ? false : true} type="checkbox" />
                                    <span className="checkmark"></span>
                                    {item.status ? "incomplete me" : "complete me"}
                                </label>
                            </td>
                        </tr>
                    })
                    : ""}
            </tbody>
        </table>
    </>
}