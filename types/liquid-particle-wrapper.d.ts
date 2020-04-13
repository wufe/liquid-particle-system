import { Particle, ILibraryInterface } from "@wufe/particles";
export declare class LiquidParticleWrapper {
    particle: Particle;
    private _manager;
    constructor(particle: Particle, _manager: ILibraryInterface);
    onParticlePositionUpdate: () => void;
}
