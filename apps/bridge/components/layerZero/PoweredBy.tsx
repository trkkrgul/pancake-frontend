import { Flex, Text } from '@pancakeswap/uikit'
import { useTheme } from '@pancakeswap/hooks'
import Image from 'next/image'

const PoweredBy = () => {
  const { isDark } = useTheme()
  return (
    <Flex py="10px" alignItems="center" justifyContent="center">
      <Text small color="textSubtle" mr="8px">
        Powered By
      </Text>
      <a href="https://sakaivault.io/" target="_blank" rel="noreferrer noopener">
        <Image
          width={120}
          height={24}
          src={isDark ? '/logo-dark.svg' : '/logo-light.svg'}
          alt="Powered By Sakai Vault"
          unoptimized
        />
      </a>
    </Flex>
  )
}

export default PoweredBy
