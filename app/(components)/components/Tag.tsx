
interface TagProps {
  tech: string
}


const Tag: React.FC <TagProps> = ({
    tech,
}) => {
  return (
    <div className="rounded-xl p-2 bg-slate-700 bg-opacity-20">
      {tech}
    </div>
  )
}

export default Tag;