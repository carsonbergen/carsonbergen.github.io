'use client';
import Warning from "@/components/Warning";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return(
        <>
            <div>
                <Warning
                    warning="This page is under construction!"
                    type={1}
                />
            </div>
        </>
    );
}