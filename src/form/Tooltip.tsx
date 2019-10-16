import React from 'react'
import PropTypes from 'prop-types'

interface TooltipInterface {
  tooltip: string
  tooltipBackground: string
  tooltipColor: string
  tooltipIconColor: string
}

const Tooltip = ({
  tooltip,
  tooltipBackground,
  tooltipColor,
  tooltipIconColor,
}: TooltipInterface) => {
  const tooltipStyle = {
    '--fresh-tooltip-background': tooltipBackground,
    '--fresh-tooltip-color': tooltipColor,
    '--fresh-tooltip-icon-color': tooltipIconColor,
  } as React.CSSProperties
  return (
    <span className="fresh-tooltip" data-tooltip={tooltip} style={tooltipStyle}>
      <svg
        className="fresh-tooltip-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9.02539 5.91797H5.84668V7.79102H6.91309V11.127H5.84668V13H10.0098V11.127H9.02539V5.91797ZM6.89258 3.16309C6.83333 3.30892 6.80371 3.46615 6.80371 3.63477C6.80371 3.80339 6.83333 3.96289 6.89258 4.11328C6.95638 4.25911 7.04297 4.38672 7.15234 4.49609C7.26172 4.60547 7.38932 4.69206 7.53516 4.75586C7.68555 4.81966 7.84733 4.85156 8.02051 4.85156C8.18457 4.85156 8.33952 4.81966 8.48535 4.75586C8.63118 4.69206 8.75879 4.60547 8.86816 4.49609C8.97754 4.38672 9.06413 4.25911 9.12793 4.11328C9.19173 3.96289 9.22363 3.80339 9.22363 3.63477C9.22363 3.46615 9.19173 3.30892 9.12793 3.16309C9.06413 3.0127 8.97754 2.88281 8.86816 2.77344C8.75879 2.66406 8.63118 2.57747 8.48535 2.51367C8.33952 2.44987 8.18457 2.41797 8.02051 2.41797C7.84733 2.41797 7.68555 2.44987 7.53516 2.51367C7.38932 2.57747 7.26172 2.66406 7.15234 2.77344C7.04297 2.88281 6.95638 3.0127 6.89258 3.16309Z"
          fill={tooltipIconColor}
        />
      </svg>
    </span>
  )
}

Tooltip.propTypes = {
  tooltip: PropTypes.string,
  tooltipBackground: PropTypes.string,
  tooltipColor: PropTypes.string,
  tooltipIconColor: PropTypes.string,
}

Tooltip.defaultProps = {
  tooltip: '',
  tooltipBackground: '#eee',
  tooltipColor: '#000',
  tooltipIconColor: '#000',
}
export default Tooltip
