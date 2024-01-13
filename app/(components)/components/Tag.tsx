
interface TagProps {
  tech: string
}


const Tag: React.FC <TagProps> = ({
    tech,
}) => {
  return (
    <div className="rounded-xl px-4 py-2 bg-slate-700 bg-opacity-20 text-slate-400">
      {tech}
    </div>
  )
}

export default Tag;