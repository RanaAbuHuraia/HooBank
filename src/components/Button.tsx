// import React from 'react'

// an interface named BtnProps with a single property stylees, which is expected to be a string. 
interface BtnProps{
  stylees : string
}

// ({ stylees }: BtnProps) is using object destructuring syntax in the function parameters. It specifies that the Button component expects an object as its parameter, and within that object, it specifically extracts the stylees property.
// :BtnProps after ({ stylees }) specifies the type of the entire parameter object. It indicates that the entire parameter object should adhere to the BtnProps interface, ensuring that it contains the expected stylees property.

const Button = ( {stylees} : BtnProps ) => {
  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${stylees}`}
      >
        GetStarted
      </button>
    </>
  );
};

export default Button;
