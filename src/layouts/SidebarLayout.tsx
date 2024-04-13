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
      <nav className="flex-shrink-0 flex-col w-60 bg-white fixed h-full overflow-y-auto">
        {sidebarContent}
      </nav>
      <div className="flex-1 ml-60">
        {mainContent}
      </div>
    </div>
    </>
  )
}
