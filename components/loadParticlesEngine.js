import { loadSlim } from "tsparticles-slim"

let engineLoadPromise

export function loadParticlesEngine(engine) {
  if (!engineLoadPromise) {
    engineLoadPromise = loadSlim(engine).catch((error) => {
      engineLoadPromise = undefined
      throw error
    })
  }

  return engineLoadPromise
}
