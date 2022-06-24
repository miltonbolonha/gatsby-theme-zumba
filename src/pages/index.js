import React, { useState } from 'react'

import { graphql, Link } from 'gatsby'

// import AudioPlayer from 'react-h5-audio-player'
// import 'react-h5-audio-player/lib/styles.css'
import Player from '../modules/block-builder/AudioPlayer'

import Layout from '../modules/layout'
import HeaderBlock from '../modules/block-builder/HeaderBlock'
import PageHeader from '../modules/block-builder/PageHeader'
import FooterBlock from '../modules/block-builder/FooterBlock'
import ShareButtons from '../modules/block-builder/ShareButtons'
import MainWrapper from '../modules/block-builder/MainWrapper'

const IndexPage = ({ data }) => {
	// const [playingNow, setPlayingNow] = useState(0)

	// function changePlayingNow(param) {
	// 	setPlayingNow(param)
	// }
	// const handleClickPrevious = (params) => {
	// 	changePlayingNow(playingNow === 0 ? playlist.length - 1 : playingNow - 1)
	// 	// console.log(playingNow)
	// }
	// const handleClickNext = (params) => {
	// 	changePlayingNow(playingNow < playlist.length - 1 ? playingNow + 1 : 0)
	// 	// console.log(playingNow)
	// }

	return (
		<Layout
			type="BODY"
			opt={{
				titleSeo: `Jogo da Memória`,
				bgImage:
					data.bgroom.childrenImageSharp[0].gatsbyImageData.images.fallback,
			}}
		>
			<HeaderBlock
				title="header-block"
				// logotipoImg={data.logotipoImg}
			/>
			<PageHeader
				title="Page Header"
				logotipoJogoMemoria={data.logotipoJogoMemoria}
				paragraph="Acesse abaixo os áudios:"
			/>
			{/* <ButtonsMain title="Botões Main" /> */}
			<MainWrapper>
				<Layout type="ROW" opt={{ alignTo: 'center', classes: 'main-btn' }}>
					<Player />

					<br />
				</Layout>
			</MainWrapper>
		</Layout>
	)
}
export default IndexPage

export const queryAtividade = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				siteUrl
				social {
					instagram
					facebook
					twitter
					youtube
				}
			}
		}

		bgroom: file(relativePath: { eq: "bg-app-room.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(width: 301, placeholder: NONE, quality: 100)
			}
		}

		logotipoJogoMemoria: file(relativePath: { eq: "logo-eugenia-3-0.png" }) {
			childrenImageSharp {
				gatsbyImageData(width: 224, placeholder: NONE, quality: 100)
			}
		}

		imagenzinha: file(relativePath: { eq: "jogodamemoria-btn.png" }) {
			childrenImageSharp {
				gatsbyImageData(height: 104, placeholder: NONE, quality: 100)
			}
		}

		palavracruzada: file(relativePath: { eq: "palavrascruzadas-btn.png" }) {
			childrenImageSharp {
				gatsbyImageData(height: 104, placeholder: NONE, quality: 100)
			}
		}

		# musicOne: file(relativePath: { eq: "agora-esta-tudo-bem.mp3" }) {
		# 	publicURL
		# }

		# musicTwo: file(relativePath: { eq: "as-criancas-ctos.mp3" }) {
		# 	publicURL
		# }

		# musicThree: file(relativePath: { eq: "corre-peito.mp3" }) {
		# 	publicURL
		# }

		# musicFour: file(relativePath: { eq: "geracao-87.mp3" }) {
		# 	publicURL
		# }

		# musicFive: file(relativePath: { eq: "heroi-vagabundo.mp3" }) {
		# 	publicURL
		# }

		# musicSix: file(relativePath: { eq: "menor-vagabundo.mp3" }) {
		# 	publicURL
		# }

		# musicSeven: file(relativePath: { eq: "o-sangue.mp3" }) {
		# 	publicURL
		# }

		# musicEight: file(relativePath: { eq: "pagode-esquadrao.mp3" }) {
		# 	publicURL
		# }

		# musicNine: file(relativePath: { eq: "quando-perdi-lagrimas.mp3" }) {
		# 	publicURL
		# }

		# musicTen: file(relativePath: { eq: "que-dia-ruim.mp3" }) {
		# 	publicURL
		# }

		# musicEleven: file(relativePath: { eq: "rugido-mar.mp3" }) {
		# 	publicURL
		# }

		# musicTwelve: file(relativePath: { eq: "show-esquadrao.mp3" }) {
		# 	publicURL
		# }
	}
`
//
// O Autor
// O Livro
// Capítulos
// Personagens
// Famílias
// Armas e Golpes
// Glossário
// Jogos

// o livro
// GiBabyFace
// guildas GiAllSeeingEye
// acontecimentos GiArrowsShield
// GiBrazil
// armas golpes e poderes GiPistolGun
// o autor RiContactsBookLine
// capitulos  BsBookmarkCheckFill
