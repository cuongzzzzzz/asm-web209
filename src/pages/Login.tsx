import * as React from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';

export interface ILoginProps {
}
interface FormValue {
    email: string
    password: string
}

export function Login(props: ILoginProps) {
    const authContext = React.useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>(

    )
    console.log(errors)
    const onSubmit = async (data: any) => {
        authContext.login(data)
    }
    return (
        <>
            {/* Hello world */}
            <h1 className='text-blue-600 font-bold text-3xl text-center my-5'>Login</h1>
            <form className="max-w-xl w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        {...register("email", {
                            required: 'Truongn ay khong duoc de trong',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Truong nay phai la email',
                            },
                        })}
                    />
                    {errors?.email && <span className='text-red-600'>Truong nay khong duoc de trong</span>}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", { required: "Truong nay khong duoc de trong", minLength: { value: 6, message: "Truong nay it nhat 6 ky tu" } })}

                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {errors?.password && <span className='text-red-600'>{errors?.password?.message}</span>}

                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </>

    );
}
