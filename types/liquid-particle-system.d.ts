import { TLiquidParticleSystemSquirt } from './liquid-particles-collection';
import { RecursivePartial, BaseParticleSystem, IParticleSystem, Particle, ILibraryInterface } from '@wufe/particles';
import { TParticleSystemBuilder } from '@wufe/particles/types';
export interface TLiquidParticleSystemParams {
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
    private _params;
    private _particles;
    constructor(manager: ILibraryInterface, _params: TLiquidParticleSystemParams);
    attach(): void;
    private _setupParticlePositionTransition;
    private _buildEnvironmentalParticles;
    private _buildBackgroundParticles;
    getParticles(): Particle[];
    tick(delta: number, time: number): void;
}
export declare class LiquidParticleSystemBuilder {
    static build: (partialParams?: RecursivePartial<TLiquidParticleSystemParams>) => TParticleSystemBuilder;
}
