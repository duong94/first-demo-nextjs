import { useEffect } from "react";

export default function Button() {
    useEffect(() => {
        console.log("After Render Button");
        return () => {
            console.log("component Button will Unmount");
        }
    })
    return (
        <h1>Button Component</h1>
    )
}