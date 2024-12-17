import { Button } from '@nextui-org/react';
import { FaAlignRight } from 'react-icons/fa6';

import Input from './Input';

const Headers = () => {
  return (
    <>
    <header className=" flex items-center gap-4 px-[37px] pt-11 pb-6 justify-between">
      <img className='w-[120px] md:w-fit' src="./image/Header-img.png"></img>

      {/*   from section  */}

      <div className="w-[625px] h-[51px] hidden lg:block">
        <form className="flex items-center gap-4  relative   justify-between  border rounded-full pl-[23px] p-1 ">
          <div className="input-before flex-grow relative">
            <Input className={'flex-grow'} text={'please input name'} />
          </div>
          <Input className={'flex-grow '} text={'please input name '} />
          <button className=" size-[43px]  rounded-full flex items-center justify-center bg-[#1677BD]">
            <img src="/image/logo-2.png" alt="search-logo" />
          </button>
        </form>
      </div>

      {/* for mobaile device */}

      <div className="hidden md:flex gap-5 items-center justify-center ">
        <button className=" size-[43px] lg:hidden rounded-full flex items-center justify-center bg-[#1677BD]">
          <img src="/image/logo-2.png" alt="search-logo" />
        </button>
        <img src="/image/Header-logo-1.png" alt="header-logo" />
        <Button className="font-font-roboto text-white font-normal px-7 py-[14px] bg-[#1E1E1E] rounded-full">
          MyFeedback for business{' '}
        </Button>
      </div>
      <FaAlignRight className="block md:hidden text-xl" />
    </header>
    <hr className='bg-[#DCDCDC]'>
    </hr>

    </>
    
  );
};

export default Headers;
