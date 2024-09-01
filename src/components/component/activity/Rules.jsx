import React from 'react';

const Rules = () => {
  const rules = [
    "Only when the number of invited accounts is reached and each account can meet the recharge amount can you receive the bonus.",
    "The invitation account meets the requirements, but the recharge amount of the account does not meet the requirements, and the bonus cannot be claimed.",
    "Please claim the event bonus within the event period. All bonuses will be cleared after the event expires.",
    "Please complete the task within the event period. After the event expires, the invitation record will be cleared.",
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg mx-auto mt-4">
      {/* Header */}
      <div className="bg-blue-600 text-white text-center py-2 rounded-lg">
        <h3 className="font-bold text-lg">Rules</h3>
      </div>
      
      {/* Rules List */}
      <div className="p-4 text-gray-700">
        {rules.map((rule, index) => (
          <div key={index} className="flex items-start mb-2">
            <span className="text-blue-500 mr-2">◆</span>
            <p className="text-sm">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
