import { Sheet } from '@mui/joy'
import { styled } from '@mui/joy/styles'

/**
 * A styled sheet component for usage in a Stack component.
 * @see {@link https://mui.com/joy-ui/react-stack/#basics Joy UI Stack} (where I got this code from)
 */
const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography['body-sm'],
  textAlign: 'center',
  fontWeight: theme.fontWeight.md,
  color: theme.vars.palette.text.secondary,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: theme.spacing(1),
  borderRadius: theme.radius.md,
}))

export default Item
