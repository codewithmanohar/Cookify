"use client";

import { useState } from "react";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogClose,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";


export function EditDialog({ id }) {
    const [userName, setUserName] = useState("");
    const [profileLink, setProfileLink] = useState("");
    const router = useRouter();
    const { editProfile } = useAuthStore();

    const handleEdit = async (e) => {
        e.preventDefault();
        // const data = {
        //     name: userName,
        //     profile_link: profileLink,
        // };
        const data = {};

        if (userName.trim() !== "") {
            data.name = userName;
        }

        if (profileLink.trim() !== "") {
            data.profile_link = profileLink;
        }

        // If user didn’t type anything
        if (Object.keys(data).length === 0) {
            toast.error("Please update at least one field.");
            return;
        }
        await editProfile(id, data);
        router.push("/");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                    Edit Profile
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleEdit}>
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                            Update your profile details and click save.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>

                        
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>

                        <Button type="submit" variant="outline">
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
