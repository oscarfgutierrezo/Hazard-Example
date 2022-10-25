export const PaymentProgressBar = ({ progressPercentage }) => {
  return (
    <div className='my-3 h-2 w-full bg-gray-300 rounded-lg overflow-hidden'>
      <div className='h-full bg-pink transition-all duration-1000' style={{ width: `${progressPercentage}%`}}></div>
    </div>
  );
};
