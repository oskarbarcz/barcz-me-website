import '../styles/GlowingBox.css'

interface GlowingBoxProps {
  content: string;
}

export default function GlowingBox({content}: GlowingBoxProps) {

  return (
    <div className="glowing-box m-1 text-xl font-bold text-gray-600">
      <div className="glowing-box__border"></div>
      <div className="glowing-box__content px-2 py-1">
        {content}
      </div>
    </div>
  )
}
