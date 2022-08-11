/* import styled from 'style-components'
 */
/* const Nav = styled.nav`
    height: 80px;
    background: #000;
  `; */
import Link from 'next/link'
const Navbar = () => {
  return (
/*     <Nav> */
      <div style={{display:"flex", flexDirection: "row", textAlign:"center", justifyContent:"space-evenly"}}>
        <Link href="/" passHref>
          <ul>HOME</ul>
        </Link>
        <Link href="/about" passHref>
          <ul>ABOUT</ul>
        </Link>
        <Link href="/contact" passHref>
          <ul>CONTACT</ul>
        </Link>
      </div>
/*     </Nav> */
  )
}

export default Navbar