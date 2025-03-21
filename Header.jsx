import Logo from "./logo"
import Nav from "./nav_links"
const Header = ()=>{
  return (
    <header className="border-2 border-violet-400 bg-dark-bckground sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between md:px-10 p-2">
      <Logo/>
      <Nav/>
      <h1 className="hidden md:inline-block">header</h1>
    </header>
  )
}

export default Header