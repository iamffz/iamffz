const Footer = () => {
  const d = new Date()
  const currentYear = d.getFullYear()
  return (
    <>
      <footer className="fixed bottom-0 w-full bg-transparent text-center h-10 grid items-center font-ubuntu">
        <div>&copy; {currentYear} IAMFFZ.ME</div>
      </footer>
    </>
  )
}

export default Footer
