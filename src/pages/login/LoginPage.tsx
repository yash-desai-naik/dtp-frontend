import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card className="w-[350px] bg-white">
                <CardHeader className="text-center">
                    <CardTitle>Sign in</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full gap-4">
                        <div className="flex flex-col items-start space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="flex flex-col items-start space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Password" />
                        </div>
                        <div className="flex space-x-2">
                            <Checkbox />
                            <Label>Remember me</Label>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                        Sign in
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
