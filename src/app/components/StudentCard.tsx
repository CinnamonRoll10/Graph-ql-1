// src/app/components/StudentCard.tsx

const StudentCard = ({ name, rollnum, gender, batch, department, branch, hall }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full">
      <h2 className="text-xl font-semibold text-blue-300">{name}</h2>
      <p className="text-white">Roll Number: {rollnum}</p>
      <p className="text-white">Gender: {gender}</p>
      <p className="text-white">Batch: {batch}</p>
      <p className="text-white">Department: {department}</p>
      <p className="text-white">Branch: {branch}</p>
      <p className="text-white">Hall: {hall}</p>
    </div>
  );
};

export default StudentCard;
