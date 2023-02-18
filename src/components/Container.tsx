import { containerProp } from "./Container.types"

const Container = ({styles} : containerProp) => {
  return (
    <div style={styles}>This is Container Style components</div>
  )
}

export default Container