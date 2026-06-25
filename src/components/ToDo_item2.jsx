function ToDo_item2(){
let todo_date = '4/10/2023';
  let todo_name = 'Go to College';

  return (
    <div className="container">
      <div className="row kg_row">
        <div className="col-4 item" >{todo_name}</div>
        <div className="col-4 item">{todo_date}</div>
        <div className="col-2">
          <button className="btn btn-danger kg_button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDo_item2