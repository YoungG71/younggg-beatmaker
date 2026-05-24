import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc } from 'lucide-react';

const AudioPlayer = ({ src, beatId }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    // Set src lazily on first play to avoid MIME-type download prompt
    if (!audio.src || audio.src === window.location.href) {
      audio.src = src;
    }

    audio.play().catch(() => {});
  }, [isPlaying, src]);

  const handleProgressClick = (e) => {
    if (!audioRef.current || !progressRef.current || !isReady) return;
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.7;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsReady(true);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const progressPercent = isReady && duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-black border border-zinc-800 rounded-lg overflow-hidden group hover:border-west-gold/40 transition-all duration-300">
      <audio ref={audioRef} preload="none" />

      {/* Top bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border-b border-zinc-800">
        <Disc
          className={`w-3.5 h-3.5 text-west-gold ${isPlaying ? 'animate-vinyl-spin' : ''}`}
        />
        <span className="text-[10px] text-gray-500 tracking-widest uppercase font-mono">
          Beat #{beatId}
          {isPlaying && <span className="text-green-400 ml-2">● Playing</span>}
        </span>
        {!isReady && (
          <span className="text-[10px] text-gray-600 ml-auto">Loading...</span>
        )}
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-3 px-3 py-2.5">
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
            isPlaying
              ? 'bg-west-gold text-black shadow-[0_0_10px_rgba(255,215,0,0.4)]'
              : 'bg-zinc-800 text-west-gold hover:bg-west-gold hover:text-black border border-zinc-700 hover:border-west-gold'
          } disabled:opacity-40 disabled:cursor-not-allowed`}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Progress bar */}
        <div
          ref={progressRef}
          onClick={handleProgressClick}
          className="flex-1 h-2 bg-zinc-800 rounded-full cursor-pointer relative overflow-hidden group/progress"
        >
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-west-gold to-yellow-400 rounded-full transition-all duration-100"
            style={{ width: `${progressPercent}%` }}
          />
          <div className="absolute inset-0 opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200 bg-west-gold/10 rounded-full" />
        </div>

        {/* Time display */}
        <span className="text-[11px] text-gray-500 font-mono tabular-nums flex-shrink-0 min-w-[70px] text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Volume controls */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={toggleMute}
            className="text-gray-500 hover:text-west-gold transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-west-gold [&::-webkit-slider-thumb]:shadow-[0_0_5px_rgba(255,215,0,0.5)]"
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
