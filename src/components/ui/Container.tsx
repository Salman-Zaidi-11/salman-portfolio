type ContainerProps = {
  children: React.ReactNode
  className?: string
}

function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`.trim()}>{children}</div>
}

export default Container
