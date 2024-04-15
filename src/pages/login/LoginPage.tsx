import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStore } from '@/store/useStore';
import { SubmitHandler } from 'react-hook-form';


export default function LoginPage() {
    const { handleSubmit, formState: { errors } } = useForm();
    const login = useStore(state => state.login); // Zustand login function

    const onSubmit: SubmitHandler<{ email: string; password: string; }> = (data) => {
        login(data.email, data.password); // Call login function with email and password
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card className="w-[350px] bg-white">
                <CardHeader className="text-center">
                    <CardTitle>Sign in</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid w-full gap-4">
                            <div className="flex flex-col items-start space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Email" {...register('email', { required: true })} />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="flex flex-col items-start space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Password" {...register('password', { required: true })} />
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>
                            <div className="flex space-x-2">
                                <Checkbox {...register('rememberMe')} />
                                <Label>Remember me</Label>
                            </div>
                        </div>
                        <CardFooter className="flex justify-center">
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                                Sign in
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
