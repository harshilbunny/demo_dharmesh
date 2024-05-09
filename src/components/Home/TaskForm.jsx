export const TaskForm = ({
    handleChange,
    state,
    handleSubmit,
    handleCancel
}) => {
    const { title, desc } = state;
    return <div className=" bg-gray-500 flex flex-col">
        <div className="responsive-form">
            <div className="form-group">
                <label htmlFor="name">Title:</label>
                <input value={title} onChange={handleChange} type="text" id="title" name="title" placeholder="Enter task title" />
            </div>

            <div className="form-group">
                <label htmlFor="message">Description:</label>
                <textarea onChange={handleChange} value={desc} id="desc" name="desc" placeholder="Enter your description"></textarea>
            </div>
            <button onClick={handleSubmit} type="submit">Submit</button>
            <button onClick={handleCancel} style={{ color: "red" }}>Cancel</button>
        </div>
    </div>
}