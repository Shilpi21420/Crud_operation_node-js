import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Students() {

  const [studt, setStudt] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => setStudt(res.data))
      .catch((err) => console.log(err));
  }, []);

const handleDelete = async (id) =>{
  try{
    await axios.delete('http://localhost:8000/student/'+id);
    window.location.reload();
  }
  catch(err){
    console.log(err);
  }
  
}

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to='/create' className="btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
           
              {
                studt && studt.length > 0 ? studt.map((data, i)=>(
                  <tr key={i}>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>
                    <Link to={`/update/${data.ID}`} className="btn btn-primary">Update</Link>
                    <button className="btn btn-danger ms-2" onClick={()=>handleDelete(data.ID)}>Delete</button>

                  </td>
                  </tr>
                
                )) : (<p>No data Present</p>)
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
