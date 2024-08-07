import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [TripleDots, AnimatedTripleDots] = createIcon({
  name: 'TripleDots',
  getIcon: (props) => (
    <Svg stroke="currentColor" fill="currentColor" viewBox="0 0 18 4" {...props}>
      <Path
        d="M9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <Path
        d="M16 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <Path
        d="M2 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </Svg>
  ),
})
