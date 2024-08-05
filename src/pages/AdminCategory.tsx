import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IAdminCategoryProps {
}

export function AdminCategory() {
    const [categories, setCategories] = React.useState<any>([])

    const fetchCategory = async () => {
        try {
            const data = await axios.get("http://localhost:3000/categories")
            setCategories(data.data)
        } catch (error) {
            console.log(error)
        }

    }

    const deleteCategory = async (id: number) => {
        try {
            if (confirm("Ban co muon xoa dan hmuc nay khong ?")) {
                await axios.delete(`http://localhost:3000/categories/${id}`)
                setCategories(categories.filter((item: any) => {
                    return item.id != id
                }))
                alert("xoa danh muc thanh cong")
            }
        } catch (error) {
            console.log(error)
            alert("xoa khong than hcong")

        }
    }
    React.useEffect(() => {
        fetchCategory()
    }, [])
    return (
        <div>
            <Link to="/admin/categories/add">
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
            </Link>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                categories name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                img
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories ? categories.map((item: any, index: number) => {
                            return (<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.name}
                                </th>
                                <td className="px-6 py-4"><img src={item.imgUrl} alt="" /></td>

                                <td className="px-6 py-4 text-right">
                                    <Link
                                        to={`/admin/categories/edit/${item.id}`}

                                    >
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>

                                    </Link>
                                    <button type="button" onClick={() => {
                                        deleteCategory(item.id)

                                    }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                </td>
                            </tr>)
                        }) : "Error"}

                    </tbody>
                </table>
            </div>

        </div>
    );
}
