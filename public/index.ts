import { init, RendererWebGL } from '@wufe/particles';
import { LiquidParticleSystemBuilder } from '../src/liquid-particle-system';

init({
    selectorOrCanvas: '#canvas',
    renderer: RendererWebGL,
    systems: [LiquidParticleSystemBuilder.build({
        particles: {
            background: {
                count: 20
            },
            environment: {
                count: 500
            }
        }
    })],
    camera: {
        enabled: true,
        zoom: {
            value: 1,
            locked: true
        }
    },
    events: {
        resize: {
            enabled: true,
            debounce: -1
        }
    }
})