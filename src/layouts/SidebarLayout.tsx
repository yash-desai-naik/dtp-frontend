// use tailwindcss
export const SidebarLayout = ({
  sidebarContent,
  mainContent
}: {
  sidebarContent: React.ReactNode,
  mainContent: React.ReactNode
}) => {
  return (
    <>
      
    <div className="flex">
      <nav className="flex-shrink-0 flex-col w-60 bg-white">
        {sidebarContent}
      </nav>
      <div className="flex-1">
        {mainContent}
      </div>
    </div>
    </>
  )
}

