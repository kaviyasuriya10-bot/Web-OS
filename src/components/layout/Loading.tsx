import HogwartsLogo from "./HogwartsLogo";

export default function Loading({ musicBlocked = false, onEnableMusic }) {
    return (
        <div className="boot-screen bg-black/70 backdrop-blur-md w-screen h-screen flex flex-col justify-center items-center fixed top-0 left-0 z-[9999]">
            <HogwartsLogo className="w-175 boot-logo"/>
            <div className="boot-progress mt-8" aria-hidden="true">
                <span />
            </div>
            <p className="mt-4 text-white/75 text-xs tracking-[0.35em] uppercase">
                Starting Hogwarts OS
            </p>
            {musicBlocked && (
                <button
                    type="button"
                    onClick={onEnableMusic}
                    className="mt-5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur hover:bg-white/20 transition"
                >
                    Click to enable boot music
                </button>
            )}
        </div>
    );
}
