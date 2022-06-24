import React from 'react'
import Layout from '../layout'
import { graphql, Link } from 'gatsby'
import Player from './AudioPlayer'
import { BiShoppingBag } from 'react-icons/bi'
import { CgReadme } from 'react-icons/cg'
import { GiBurningBook, GiPunchBlast, GiGamepadCross } from 'react-icons/gi'
import { RiContactsBookFill } from 'react-icons/ri'
import { BsBookmarkCheck } from 'react-icons/bs'
import { GoBook } from 'react-icons/go'
import { RiWhatsappFill, RiEyeFill } from 'react-icons/ri'
const FooterBlock = ({ social }) => {
	return (
		<>
			<Layout type="ROW" opt={{ isBoxed: true, classes: '	' }}>
				<Player />
			</Layout>
		</>
	)
}

export default FooterBlock
