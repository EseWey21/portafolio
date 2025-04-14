import "./Cursor.css"

const Cursor = ({ position }) => {
  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </div>
  )
}

export default Cursor
