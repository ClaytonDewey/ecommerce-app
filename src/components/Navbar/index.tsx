import { Flex } from '@chakra-ui/react';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <Flex alignItems='center' justifyContent='center' height='113px'>
        <h1>sneakers</h1>
        <ul>
          <li>Collections</li>
          {/* <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li> */}
        </ul>
      </Flex>
    </>
  );
};
export default Navbar;
