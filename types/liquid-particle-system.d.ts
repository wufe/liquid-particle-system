import { TLiquidParticleSystemSquirt } from './liquid-particles-collection';
import { RecursivePartial, BaseParticleSystem, IParticleSystem, Particle } from '@wufe/particles';
export interface ILiquidParticleSystemParams {
    particles: {
        environment: {
            count: number;
        };
        background: {
            count: number;
        };
        squirts: TLiquidParticleSystemSquirt[];
    };
}
export declare class LiquidParticleSystem extends BaseParticleSystem implements IParticleSystem {
    static params: ILiquidParticleSystemParams;
    private _particles;
    attach(): void;
    private _setupParticlePositionTransition;
    private _buildEnvironmentalParticles;
    private _buildBackgroundParticles;
    getParticles(): Particle[];
    tick(delta: number, time: number): void;
}
export declare class LiquidParticleSystemBuilder {
    static build(partialParams?: RecursivePartial<ILiquidParticleSystemParams>): typeof LiquidParticleSystem;
}
