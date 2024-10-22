// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    // Structure to store student information
    struct Student {
        uint256 rollnum;
        string name;
        string gender;
        string batch;
        string department;
        string branch;
        string hall;
    }

    // Mapping to store student information using roll number as the key
    mapping(uint256 => Student) private students;

    // Array to keep track of all roll numbers for easy iteration
    uint256[] private studentRollNumbers;

    // Event to emit when a new student is added
    event StudentAdded(uint256 rollnum, string name, string gender, string batch, string department, string branch, string hall);

    // Function to add a new student
    function addStudent(
        uint256 _rollnum,
        string memory _name,
        string memory _gender,
        string memory _batch,
        string memory _department,
        string memory _branch,
        string memory _hall
    ) public {
        // Ensure that the student does not already exist
        require(bytes(students[_rollnum].name).length == 0, "Student with this roll number already exists");

        // Add the student to the mapping
        students[_rollnum] = Student(_rollnum, _name, _gender, _batch, _department, _branch, _hall);

        // Add the roll number to the array
        studentRollNumbers.push(_rollnum);

        // Emit the event
        emit StudentAdded(_rollnum, _name, _gender, _batch, _department, _branch, _hall);
    }

    // Function to retrieve student information by roll number
    function getStudent(uint256 _rollnum) public view returns (string memory name, string memory gender, string memory batch, string memory department,string memory branch, string memory hall) {
        // Check if the student exists
        require(bytes(students[_rollnum].name).length != 0, "Student not found");

        // Return the student's information
        Student memory student = students[_rollnum];
        return (student.name, student.gender, student.batch, student.department, student.branch, student.hall);
    }

    // Function to get the total number of students
    function getTotalStudents() public view returns (uint256) {
        return studentRollNumbers.length;
    }

    // Function to get all roll numbers
    function getAllStudentRollNumbers() public view returns (uint256[] memory) {
        return studentRollNumbers;
    }
}
