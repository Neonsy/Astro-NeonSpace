import { type Container, type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

const devEnv = import.meta.env.DEV;

export default function ParticleBackground({}) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        if (devEnv) {
            console.log(container);
        }
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fpsLimit: 60,
            background: {
                repeat: 'no-repeat',
            },
            fullScreen: {
                zIndex: -50,
            },
            particles: {
                color: {
                    value: ['#FFFF00', '#FF1493', '#00FFFF'],
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.09,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.bounce,
                    },
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 900,
                    },
                    value: 90,
                },
                opacity: {
                    value: 0.18,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 3 },
                    animation: {
                        enable: true,
                        speed: 2,
                        minimumValue: 1,
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
