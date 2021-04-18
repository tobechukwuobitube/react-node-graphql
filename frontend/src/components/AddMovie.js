import React from "react";

function AddMovie() {
  return (
    <div className="addMovie">
      <form onSubmit={() => alert("Movie Added!")}>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" required />
        <label htmlFor="">Genre</label>
        <input type="text" name="" id="" required />
        <label htmlFor="">Year</label>
        <input type="text" name="" id="" placeholder="(optional)" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
