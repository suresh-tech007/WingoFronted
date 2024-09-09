import React from 'react';
import Rules from './Rules';

const InvitationRewardRules = () => {
  const rewardsData = [
    { invitees: '1People', deposit: '₹200.00', bonus: '₹25.00' },
    { invitees: '3People', deposit: '₹200.00', bonus: '₹100.00' },
    { invitees: '10People', deposit: '₹500.00', bonus: '₹555.00' },
    { invitees: '30People', deposit: '₹500.00', bonus: '₹1,555.00' },
    { invitees: '70People', deposit: '₹500.00', bonus: '₹3,555.00' },
    { invitees: '100People', deposit: '₹500.00', bonus: '₹5,555.00' },
    { invitees: '200People', deposit: '₹500.00', bonus: '₹11,555.00' },
    { invitees: '500People', deposit: '₹500.00', bonus: '₹25,555.00' },
    { invitees: '1000People', deposit: '₹500.00', bonus: '₹55,555.00' },
    { invitees: '2000People', deposit: '₹500.00', bonus: '₹111,111.00' },
    { invitees: '5000People', deposit: '₹500.00', bonus: '₹277,777.00' },
    { invitees: '10000People', deposit: '₹500.00', bonus: '₹555,555.00' },
  ];

  return (
    <div className="bg-[#22275b]  relative z-50  p-4   w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]     shadow-lg max-w-lg mx-auto">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">Invitation reward rules</h2>
        <p className="text-sm text-gray-500">
          Invite friends and recharge to get additional platform rewards!
        </p>
        <p className="text-sm text-white">
          After being claimed, the rewards will be directly distributed to the wallet balance within 10 minutes.
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg overflow-hidden text-sm text-left text-white  ">
          <thead className="text-xs    uppercase bg-[#2c3971]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Invite account
              </th>
              <th scope="col" className="px-6 py-3">
                Deposit amount
              </th>
              <th scope="col" className="px-6 py-3">
                Bonus
              </th>
            </tr>
          </thead>
          <tbody>
            {rewardsData.map((reward, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[#374992]' : 'bg-[#2c3971]'}>
                <td className="px-6 py-4 whitespace-nowrap">{reward.invitees}</td>
                <td className="px-6 py-4 whitespace-nowrap">{reward.deposit}</td>
                <td className="px-6 py-4 whitespace-nowrap">{reward.bonus}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <Rules/>
    </div>
  );
};

export default InvitationRewardRules;
