import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../contexts/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';

const schema = z.object({
    name: z.string().nonempty('Name is required'),
    price: z.number().min(0, 'Price must be a positive number').refine(val => !isNaN(val), 'Price must be a number'),
    imgUrl: z.string().nonempty('Image URL is required'),
    desc: z.string().nonempty('Description is required'),
    discount: z.number().min(0, 'Discount must be a positive number').refine(val => !isNaN(val), 'Discount must be a number'),
    category: z.string().nonempty('Category is required'),
});

type FormData = z.infer<typeof schema>;

export function UpdateProduct() {
    const context = useContext(ProductsContext)
    const navigate = useNavigate()
    const id = useParams().id
    console.log(id)


    const [categories, setCategories] = useState<any>([])
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await context?.onUpdate(data, id)
            navigate("/admin/products/list")
            context?.getProducts()

            reset();
        } catch (error) {
            console.log(error)

        }

    };

    const fetchCategory = async () => {
        try {
            const data = await axios.get("http://localhost:3000/categories")
            setCategories(data.data)
        } catch (error) {
            console.log(error)
        }

    }
    const fetchOneProducts = async (id: number | string | undefined) => {
        try {

            const data = await axios.get(`http://localhost:3000/products/${id}`)
            reset(data.data)
        } catch (error) {
            console.log(error)

        }

    }
    useEffect(() => {
        fetchCategory()
        fetchOneProducts(id)
    }, [])

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
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Price
                </label>
                <input
                    type="number"
                    id="price"
                    {...register('price', { valueAsNumber: true })}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter product price"
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
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
            <div className="mb-5">
                <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Description
                </label>
                <input
                    type="text"
                    id="desc"
                    {...register('desc')}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter product description"
                />
                {errors.desc && <p className="text-red-500 text-sm">{errors.desc.message}</p>}
            </div>
            <div className="mb-5">
                <label
                    htmlFor="discount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Discount
                </label>
                <input
                    type="number"
                    id="discount"
                    {...register('discount', { valueAsNumber: true })}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter discount"
                />
                {errors.discount && <p className="text-red-500 text-sm">{errors.discount.message}</p>}
            </div>
            <div className="mb-5">
                <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Category
                </label>
                <select
                    id="category"
                    {...register('category')}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                >
                    {categories.map((item: any, index: number) => {
                        return <option key={index} value={item.name}>{item.name}</option>

                    })}
                    {/* Thêm các tùy chọn danh mục khác nếu cần */}
                </select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add Product
            </button>
        </form>
    );
}
