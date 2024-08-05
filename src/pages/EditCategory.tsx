import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { z } from 'zod';
import { UpdateProduct } from './UpdateProduct';
import { useEffect } from 'react';

const schema = z.object({
    name: z.string().nonempty('Name is required'),
    imgUrl: z.string().nonempty('Image URL is required'),
});

type FormData = z.infer<typeof schema>;

export function UpdateCategory() {
    const navigate = useNavigate()
    const { id } = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    const getCategory = async (id: any) => {
        try {
            const data = await axios.get(`http://localhost:3000/categories/${id}`)
            reset(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const updateCategory = async (data: any, id: any) => {
        await axios.put(`http://localhost:3000/categories/${id}`, data)

    }

    useEffect(() => {
        getCategory(id)
    }, [])

    const onSubmit = async (data: FormData) => {
        try {
            await updateCategory(data, id)
            alert("sua danh muc thanh cong")
            navigate("/admin/categories/list")



            reset();
        } catch (error) {
            alert("co loi xay ra !!!")
            console.log(error)

        }

    };



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter product name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-5">
                <label
                    htmlFor="imgUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Img URL
                </label>
                <input
                    type="text"
                    id="imgUrl"
                    {...register('imgUrl')}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter image URL"
                />
                {errors.imgUrl && <p className="text-red-500 text-sm">{errors.imgUrl.message}</p>}
            </div>


            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Edit Category
            </button>
        </form>
    );
}
