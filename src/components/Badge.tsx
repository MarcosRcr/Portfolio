interface BadgeProps {
  title: string;

}
const Badge = (props : BadgeProps) => {
  return (
    <span className="bg-gray-100 text-gray-800 border border-neutral-400 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{props.title}</span>
  )
}

export default Badge