interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand,
  };
};

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand,
  };
};

const majorSubject1: MajorCredits = { credits: 5, brand: "Major" };
const majorSubject2: MajorCredits = { credits: 3, brand: "Major" };
const minorSubject1: MinorCredits = { credits: 2, brand: "Minor" };
const minorSubject2: MinorCredits = { credits: 1, brand: "Minor" };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log(`Total Major Credits: ${totalMajorCredits.credits} (${totalMajorCredits.brand})`);
console.log(`Total Minor Credits: ${totalMinorCredits.credits} (${totalMinorCredits.brand})`);

