
export const TableFavorites = () => {
  return (
    <div className="custom-table-container">
      <h2>My besties</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Current Status</th>
            <th>Species</th>
            <th>Location</th>
            <th>Episodes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td>3</td>
            <td></td>
            <td>5</td>
            <td></td>
          </tr>
          <tr>
            {/* <td colSpan="6">
              <AccordionApp elem={elem} index={index} />
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
