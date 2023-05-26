import { Link } from "react-router-dom";

const ToysRow = ({ toy, index }) => {
    return (
        <tr>
            <th>{++index}</th>
            <td>{toy.sellerName}</td>
            <td>{toy.toyName}</td>
            <td>{toy.category}</td>
            <td>{toy.price}</td>
            <td>{toy.quantity}</td>
            <td>
                <Link to={`/toy/${toy._id}`}><button className="btn btn-xs">View Details</button></Link>
            </td>
        </tr>
    );
};

export default ToysRow;
