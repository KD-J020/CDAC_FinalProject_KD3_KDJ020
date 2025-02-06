import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { getExecutiveList, deleteExecutive } from "../Service/executive";
import { Link } from "react-router-dom";

function Executive() {
    const [executives, setExecutives] = useState([]);
    const [sortOption, setSortOption] = useState("active");

    const onLoadExecutives = async () => {
        console.log(sortOption);
        const result = await getExecutiveList(sortOption);
        if (result.status === 'error') {
            toast.error(result.error);
        } else {
            setExecutives(result.data);
        }
    };

    const onToggleCustomer = async (userId, status) => {
        console.log(userId, status);
        const result = await deleteExecutive(userId)
        onLoadExecutives();
        
      }
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };
    useEffect(() => {
        onLoadExecutives();
    }, [sortOption]);
    return (
        <div className="container mt-4">
            <h2 className="header"> Executives</h2>
            <Link className='btn btn-success mb-3' to='/home/add-executive'>Add</Link>
            {executives.length === 0 && <p>No executives found,please add new Executives</p>}
            <div className="d-flex justify-content-end mb-3">
                <select className="form-control w-auto h-5" value={sortOption} onChange={handleSortChange}>
                    <option value="active">Active Executives</option>
                    <option value="inactive">InActive Executives</option>
                    <option value="all">All Executives</option>
                </select>
            </div>
            <div className="table-responsive">
                {executives.length > 0 && (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {executives.map((customer, index) => (
                                <tr key={customer.id}>
                                    <td>{index + 1}</td>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>
                      <button
                        onClick={() => {
                          onToggleCustomer(
                            customer['id'],
                            customer['active'] == 1 ? 0 : 1
                          )
                        }}
                        className={
                          'btn ' +
                          (customer['active'] == 1
                            ? ' btn-danger'
                            : ' btn-success')
                        }
                      >
                        {customer['active'] == 1 ? 'block' : 'unblock'}
                      </button>
                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Executive;