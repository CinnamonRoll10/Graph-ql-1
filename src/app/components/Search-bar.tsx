'use client';
import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import AddStudentButton from './AddStudentButton';
import StudentCard from './StudentCard'; // Import the StudentCard component

const SEARCH_STUDENTS = gql`
  query SearchStudents($name: String, $rollnum: String, $gender: String, $batch: String, $department: String, $branch: String, $hall: String) {
    students(
      where: {
        name_contains: $name
        rollnum_contains: $rollnum
        gender_contains: $gender
        batch_contains: $batch
        department_contains: $department
        branch_contains: $branch
        hall_contains: $hall
      }
    ) {
      name
      rollnum
      gender
      batch
      department
      branch
      hall
    }
  }
`;

const SearchInterface = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchRoll, setRollnum] = useState('');
  const [gender, setGender] = useState('');
  const [batch, setBatch] = useState('');
  const [department, setDepartment] = useState('');
  const [branch, setBranch] = useState('');
  const [hall, setHall] = useState('');

  const [searchStudents, { data, loading, error }] = useLazyQuery(SEARCH_STUDENTS);

  const handleSearch = () => {
    searchStudents({
      variables: {
        name: searchTerm,
        rollnum: searchRoll,
        gender,
        batch,
        department,
        branch,
        hall,
      },
    });
  };

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center p-6">

    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your All new <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Student Search</span></h1>
    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Student Search, you can add new students or explore the existing students.</p>
      <AddStudentButton />


      <div className="w-full max-w-lg p-6 bg-gray-900/60 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-blue-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Search by Roll Number"
            value={searchRoll}
            onChange={(e) => setRollnum(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-blue-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-pink-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-pink-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Batch</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
          </select>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-blue-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Programme</option>
            <option>BS</option>
            <option>BTech</option>
          </select>

          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-pink-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Branch</option>
            <option>MTH</option>
            <option>CSE</option>
            <option>EE</option>
            <option>AE</option>
            <option>BSBE</option>
            <option>MSE</option>
            <option>ES</option>
            <option>CHE</option>
            <option>PHY</option>
            <option>CHM</option>
          </select>

          <select
            value={hall}
            onChange={(e) => setHall(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent border border-blue-500 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Hall</option>
            <option>Hall 1</option>
            <option>Hall 2</option>
            <option>Hall 3</option>
            <option>Hall 4</option>
            <option>Hall 5</option>
            <option>Hall 6</option>
            <option>Hall 7</option>
            <option>Hall 8</option>
            <option>Hall 9</option>
            <option>Hall 10</option>
            <option>Hall 11</option>
            <option>Hall 12</option>
            <option>Hall 13</option>
            <option>Hall 14</option>
          </select>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handleSearch}
            className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
          <button
            onClick={() => {
              setSearchTerm('');
              setBatch('');
              setDepartment('');
              setBranch('');
              setHall('');
            }}
            className="p-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Clear
          </button>
        </div>

        {/* Display Results */}
        <div className="mt-8">
          {loading && <p className="text-white">Loading...</p>}
          {error && <p className="text-red-500">Error: {error.message}</p>}
          {data && (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.students.map((student) => (
                <StudentCard
                  key={student.rollnum}
                  name={student.name}
                  rollnum={student.rollnum}
                  gender={student.gender}
                  batch={student.batch}
                  department={student.department}
                  branch={student.branch}
                  hall={student.hall}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInterface;
//Minimal version of SearchInterface.tsx
// import React from 'react';

// const mockStudents = [
//   {
//     rollnum: "12345",
//     name: "John Doe",
//     gender: "Male",
//     batch: "2024",
//     department: "Computer Science",
//     branch: "CSE",
//     hall: "Hall 1",
//   },
//   {
//     rollnum: "67890",
//     name: "Jane Smith",
//     gender: "Female",
//     batch: "2023",
//     department: "Electrical Engineering",
//     branch: "EE",
//     hall: "Hall 2",
//   },
// ];

// const MockStudentCard = () => {
//   return (
//     <div className="flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold mb-6 text-white">Student List</h1>
//       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {mockStudents.map((student) => (
//           <div key={student.rollnum} className="bg-gray-800 p-4 rounded-lg shadow-lg w-full">
//             <h2 className="text-xl font-semibold text-blue-300">{student.name}</h2>
//             <p className="text-white">Roll Number: {student.rollnum}</p>
//             <p className="text-white">Gender: {student.gender}</p>
//             <p className="text-white">Batch: {student.batch}</p>
//             <p className="text-white">Department: {student.department}</p>
//             <p className="text-white">Branch: {student.branch}</p>
//             <p className="text-white">Hall: {student.hall}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// const SearchInterface = () => {
//   return (
//     <div>
//       <MockStudentCard />
//     </div>
//   );
// };

// export default SearchInterface;

