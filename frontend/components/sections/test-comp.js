import PropTypes from "prop-types"
import Markdown from "react-markdown"

const TextComp = ({ data }) => {
  return (
    <div className="prose prose-lg container py-12">
      <Markdown>{data.content}</Markdown>
    </div>
  )
}

TextComp.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
}

export default TextComp
