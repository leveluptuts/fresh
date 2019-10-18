import Select from './Select'
import Reference from './Reference'
import Password from './Password'
import Tags from './Tags'
import TextArea from './TextArea'
import NumberField from './Number'
import Markdown from './Markdown'
import Toggle from './Toggle'

const COMPLEX_FIELDS: object = {
  select: Select,
  password: Password,
  tags: Tags,
  markdown: Markdown,
  textarea: TextArea,
  toggle: Toggle,
  reference: Reference,
  number: NumberField,
}

export { COMPLEX_FIELDS }
