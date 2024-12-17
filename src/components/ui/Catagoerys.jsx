import React, { useContext, useState } from 'react';
import { theameContext } from '../hooks/useContext';
import Container from './common/Container';
import { NavLink } from 'react-router-dom';


const Catagoerys = () => {
  const [getValue] = useContext(theameContext);
  const { catagoery } = getValue[0];

  return (
    <Container>
      <div className="grid gap-y-5 grid-cols-[repeat(auto-fit,minmax(80px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] lg:flex items-center justify-between ">
        {catagoery?.length > 0 &&
          catagoery.map(({ id, icon, name }) => {
            return (
                <NavLink  key={id} >
              <div className="flex h-full items-stretch justify-center flex-col gap-2">
                  <img
                    className={`size-[15px] md:size-fit `}
                    src={icon}
                    alt={`${name}-icon`}
                  />
                  <h5 className="text-[10px] md:text-[15px] font-font-roboto">
                    {name}
                  </h5>
              </div>
                </NavLink>
            );
          })}
      </div>
    </Container>
  );
};

export default Catagoerys;
