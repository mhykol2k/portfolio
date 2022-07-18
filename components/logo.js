import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: 200ms ease;
    }

    &:hover img {
        transform: scale(0.8);
    }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  
    return (
      <Link href="/" scroll={false}>
        <a>
          <LogoBox>
            <Image src={footPrintImg} width={20} height={20} alt="" />
          </LogoBox>
        </a>
      </Link>
    )
  }
  
  export default Logo