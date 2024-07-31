interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;`
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  contract: true,
  subject: 'Mathematics',
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Los Angeles',
  yearsOfExperience: 5,
  hobby: 'Painting',
};

console.log(teacher1);
console.log(teacher2);
