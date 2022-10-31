export const PaymentProgressBar = ({ progressPercentage }) => {
  return (
    <div className='w-full h-2 my-3 bg-gray-300 rounded-lg overflow-hidden'>
      <div className='h-full bg-pink transition-all duration-1000' style={{ width: `${progressPercentage}%`}}></div>
    </div>
  );
};
