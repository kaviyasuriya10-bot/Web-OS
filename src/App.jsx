import { useEffect, useRef, useState } from 'react';
import Home from './components/Home';
import FirstRun from './components/FirstRun';
import Loading from './components/layout/Loading';

function requestFullscreen() {
  const el = document.documentElement;
  if (document.fullscreenElement) return Promise.resolve();
  const req = el.requestFullscreen?.call(el);
  return req instanceof Promise ? req : Promise.resolve();
}

function FullscreenGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (document.fullscreenElement) return;
    if (sessionStorage.getItem("hogwarts-fs-dismissed")) return;

    let cancelled = false;

    const onChange = () => {
      if (document.fullscreenElement) {
        localStorage.setItem("hogwarts-fs-allowed", "1");
        sessionStorage.removeItem("hogwarts-fs-dismissed");
        setVisible(false);
      }
    };
    document.addEventListener("fullscreenchange", onChange);

    requestFullscreen()
      .then(() => {
        if (!cancelled && !document.fullscreenElement) setVisible(true);
      })
      .catch(() => {
        if (cancelled) return;
        if (localStorage.getItem("hogwarts-fs-allowed")) {
          const autoEnter = () => requestFullscreen().catch(() => setVisible(true));
          window.addEventListener("pointerdown", autoEnter, { once: true });
          window.addEventListener("keydown", autoEnter, { once: true });
        } else {
          setVisible(true);
        }
      });

    return () => {
      cancelled = true;
      document.removeEventListener("fullscreenchange", onChange);
    };
  }, []);

  if (!visible || document.fullscreenElement) return null;

  const enter = () => {
    requestFullscreen()
      .then(() => setVisible(false))
      .catch(() => {});
  };

  const dismiss = () => {
    sessionStorage.setItem("hogwarts-fs-dismissed", "1");
    setVisible(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2 rounded-lg bg-white px-6 py-5 text-center shadow-xl">
        <p className="text-sm font-semibold text-neutral-900">Enter fullscreen?</p>
        <p className="max-w-60 text-sm text-neutral-500">Hogwarts OS works best fullscreen.</p>
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={dismiss}
            className="rounded-full px-3.5 py-1.5 text-sm font-medium text-neutral-500 transition hover:bg-neutral-100 cursor-pointer"
          >
            Not now
          </button>
          <button
            onClick={enter}
            className="rounded-full bg-neutral-900 px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-neutral-700 cursor-pointer"
          >
            Go fullscreen
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {

  const bootAudioRef = useRef(null);
  const [bootMusicBlocked, setBootMusicBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const audio = bootAudioRef.current;
    if (!audio) return;

    audio.volume = 0.78;
    audio.currentTime = 0;

    const playBootMusic = () => {
      audio.play()
        .then(() => setBootMusicBlocked(false))
        .catch(() => setBootMusicBlocked(true));
    };

    playBootMusic();

    const resume = () => {
      playBootMusic();
      if (!audio.paused) {
        window.removeEventListener("pointerdown", resume);
        window.removeEventListener("keydown", resume);
      }
    };

    window.addEventListener("pointerdown", resume, { passive: true });
    window.addEventListener("keydown", resume);

    return () => {
      window.removeEventListener("pointerdown", resume);
      window.removeEventListener("keydown", resume);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const enableBootMusic = () => {
    bootAudioRef.current?.play()
      .then(() => setBootMusicBlocked(false))
      .catch(() => {});
  };
  const [isFirstRun, setIsFirstRun] = useState(() => {
    try {
      return !localStorage.getItem("hogwarts-seen");
    } catch {
      return false;
    }
  });

  const finishFirstRun = () => {
    try {
      localStorage.setItem("hogwarts-seen", "1");
    } catch { /* ignore */ }
    setIsFirstRun(false);
  };

  const hideLoading = () => {
    if (isLoading) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(hideLoading, 5000)
    return () => {
      clearTimeout(timeOutId);
    }
  }, [])

  return (
    <>
      <audio ref={bootAudioRef} src="/Music/Hedwigs-Song-Boot.mp3" preload="auto" aria-hidden="true" />
      {isLoading && <Loading musicBlocked={bootMusicBlocked} onEnableMusic={enableBootMusic} />}
      {isFirstRun ? (
        !isLoading && <FirstRun onDone={finishFirstRun} />
      ) : (
        <div>
          <Home />
        </div>
      )}
      {!isFirstRun && <FullscreenGate />}
    </>
  )
}

export default App
