export class Bowling {
  constructor() {
    // Game state data
    this.frameNum = 1;
    this.rollNum = 1;
    this.pinsLeft = 10;
    this.totScore = 0;

    // Frame 10 bonus rolls flag
    this.bonus = false;

    // Multipliers account for strikes and spares
    this.mult1 = 1;
    this.mult2 = 1;
  }
  
  roll(pinsHit) {
    // Check valid call
    if (pinsHit < 0) {
      throw new Error('Negative roll is invalid');
    }
    if (pinsHit > this.pinsLeft) {
      throw new Error('Pin count exceeds pins on the lane');
    }
    if (this.frameNum > 10) {
      throw new Error('Cannot roll after game is over');
    }

    // Adjust scores and pin count
    // total score + pinsHit * multiplier
    this.totScore += pinsHit * this.mult1;
    // pins that were left minus pins that were hit
    this.pinsLeft -= pinsHit;

    // Adjust multipliers
    // this multiplier1 is multiplier2 + (no pins left & it's not tenth frame)
    this.mult1 = this.mult2 + (!this.pinsLeft && this.frameNum < 10);
    // multiplier2 is 1 + (there are not pins left & this is the first roll and this isn't the tenth frame)
    this.mult2 = 1 + (!this.pinsLeft && this.rollNum === 1 && this.frameNum < 10);
    
    // Set bonus flag
    this.bonus = (this.bonus || (!this.pinsLeft && this.frameNum === 10));

    // Increment frameNum and rollNum
    let newFrame = (this.bonus ? (this.rollNum === 3) : (this.rollNum === 2 || !this.pinsLeft));
    this.frameNum += newFrame;
    this.rollNum = (newFrame ? 1 : this.rollNum + 1);

    // Reset pins to 10 if necessary
    this.pinsLeft = ((newFrame || !this.pinsLeft) ? 10 : this.pinsLeft);
  }

  score() {
    // Check if gameover
    if (this.frameNum !== 11) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    return this.totScore;
  }
}