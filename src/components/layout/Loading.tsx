import HogwartsLogo from "./HogwartsLogo";

export default function Loading() {
    return (
        <div className="bg-black/50 backdrop-blur-sm w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-10">
            <HogwartsLogo className="w-175"/>
        </div>
    )
}