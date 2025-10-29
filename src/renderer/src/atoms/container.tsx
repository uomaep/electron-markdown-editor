import { Box, BoxProps } from '@kuma-ui/core'

interface Props extends BoxProps {}

export const Container = ({ children, ...boxProps }: Props) => {
  return (
    <Box maxWidth="100%" {...boxProps}>
      {children}
    </Box>
  )
}
