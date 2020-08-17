
const EARTH_ORBITAL_PERIOD_SECONDS = 31557600;

const ORBITALS_PERIOD_RATES = {
                  'earth': 1,
                  'mercury': 0.2408467,
                  'venus': 0.61519726,
                  'mars': 1.8808158,
                  'jupiter': 11.862615,
                  'saturn': 29.447498,
                  'uranus': 84.016846,
                  'neptune': 164.79132};

export const age = (planet, seconds) => {
    const periodInSeconds = ORBITALS_PERIOD_RATES[planet] * EARTH_ORBITAL_PERIOD_SECONDS;
    return parseFloat((seconds / periodInSeconds).toFixed(2));
}

// The variable EARTH...SECONDS is the number of seconds in a year on earth.  The variable OBITAL...RATES gives us the multipliers which allows for different year lengths on other planets.  Within the function age, periodInSeconds is the planet input multiplier multiplied by the earth period in seconds, and parseFloat returns the age of the person in years on that particular planet rounded to two sig figs.