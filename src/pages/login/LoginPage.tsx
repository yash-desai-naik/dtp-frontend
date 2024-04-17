import CustomButton from '@/components/CustomButton';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from '@/store/useStore';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';


export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string; }>();
    const login = useStore(state => state.login); // Zustand login function

    const onSubmit: SubmitHandler<{ email: string; password: string; }> = (data) => {
        login(data.email, data.password); // Call login function with email and password
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card className="w-[350px] bg-white">
                <CardHeader className="text-center">
                    <CardTitle>Sign in</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full gap-5">
                            <div className="flex flex-col items-start space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full"
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="flex flex-col items-start space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="w-full relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="w-full"
                                        {...register('password', { required: true })}
                                    />
                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </span>
                                </div>
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>
                            <div className="flex space-x-2">
                                <Checkbox />
                                <Label>Remember me</Label>
                            </div>
                            <div className='flex flex-col items-start'>
                                <CardFooter className="w-full relative">
                                    <CustomButton text="Sign In" cls='w-full h-10 bg-blue-700 hover:bg-blue-400 hover:text-white text-white font-bold rounded-md transition-colors duration-300' />
                                </CardFooter>
                            </div>
                        </div>

                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
