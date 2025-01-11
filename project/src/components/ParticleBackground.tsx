import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground({}) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const colors = ['#FFFF00', '#FF1493', '#00FFFF'],
        particleCount = 55,
        minSize = 1,
        maxSize = 3,
        speed = 2,
        moveSpeed = 0.5,
        linkColor = '#ffffff',
        linkDistance = 150,
        linkOpacity = 0.1,
        particleOpacity = 0.3;

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fpsLimit: 120,
            particles: {
                color: {
                    value: colors,
                },
                links: {
                    color: linkColor,
                    distance: linkDistance,
                    enable: true,
                    opacity: linkOpacity,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.bounce,
                    },
                    random: false,
                    speed: moveSpeed,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: particleCount,
                },
                opacity: {
                    value: particleOpacity,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: minSize, max: maxSize },
                    animation: {
                        enable: true,
                        speed: speed,
                        minimumValue: minSize,
                        sync: false,
                        startValue: 'min',
                        count: 0,
                    },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (init) {
        return <Particles id='tsparticles' particlesLoaded={particlesLoaded} options={options} />;
    }

    return <></>;
}
