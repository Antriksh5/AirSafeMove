'use client';

export default function VideoBackground() {
    return (
        <>
            {/* Fullscreen Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -2,
                }}
            >
                <source src="/bg-video.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.75) 100%)',
                    zIndex: -1,
                }}
            />
        </>
    );
}
