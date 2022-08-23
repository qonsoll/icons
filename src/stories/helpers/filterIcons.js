import ICONS_NAMES from '../../constants/namesMap'

const filterIcons = (filter) =>
  Object.keys(ICONS_NAMES).filter((name) => name.toLowerCase().includes(filter))

export default filterIcons
