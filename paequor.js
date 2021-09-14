// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};

function pAequorFactory(num, array) {
  return {
    specimenNum : num,
    dna : array,
    mutate() {
      const arrayIndex = Math.floor(Math.random() * 15)
      const mutBase = array[arrayIndex];
      const newBase = returnRandBase();
      if (newBase === mutBase) {
        this.mutate();
      };
      this.dna[arrayIndex] = newBase;
    },
    compareDNA(pAequor) {
      let sum = 0;
      for (let i =0; i < this.dna.length; i++) {
        if (this.dna[i] == pAequor.dna[i]) {
          sum += 1
        };
      };
      const dnaPercent = (sum/(this.dna.length))*100;
      return `specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${dnaPercent}% DNA in common`
    },
    willLikelySurvive() {
      sumBase = 0;
      for (base of this.dna) {
        if (base == 'C' || base == 'G') {
          sumBase += 1;
        };
      };
      percentCG = (sumBase/this.dna.length)*100;
      if (percentCG >= 60) {
        return true;
      } else {
        return false;
      };
            
    },

  };
};

SurvivePAequorArray = [];
num=1;
while (SurvivePAequorArray.length < 30) {
  const pAequorSpecimen = pAequorFactory(num,mockUpStrand());
  if (pAequorSpecimen.willLikelySurvive()) {
    SurvivePAequorArray.push(pAequorSpecimen);
  };
  num++;
};
console.log(SurvivePAequorArray.length, SurvivePAequorArray)
