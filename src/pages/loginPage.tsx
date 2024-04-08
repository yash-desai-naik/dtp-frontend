import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function loginPage() {
    return (
        <div className="flex items-center justify-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                    <CardDescription>This is basic login page</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full gap-4">
                        <div className="flex flex-col items-start space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="flex flex-col items-start space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <div className="flex space-x-2">
                            <Checkbox />
                            <Label>Remember me</Label>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>

                    <Button className="w-full">Sign in</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default loginPage;

