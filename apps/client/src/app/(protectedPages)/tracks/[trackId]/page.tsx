import { prisma } from '@repo/parcels-db'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { constructMetadata } from '@/lib/utils'
import { TrackView } from './_components/track-view'

interface Props {
	params: Promise<{
		trackId: string
	}>
}

/**
 * Generates metadata for the coin page
 * @param props - The props object
 * @param props.params - Route parameters containing coinId
 * @returns Metadata object with formatted coin name as title
 */
export async function generateMetadata({ params }: Props) {
	try {
		const { trackId } = await params

		const track = await prisma.track.findUnique({
			where: { id: trackId },
			select: {
				number: true,
				name: true,
			},
		})

		const formattedTitle = track?.number || track?.name || 'Track'

		return constructMetadata({ title: `${formattedTitle}` })
	} catch (error) {
		console.error('Error generating metadata:', error)

		return constructMetadata({ title: 'Track' })
	}
}

const TrackPage = async ({ params }: Props) => {
	const { trackId } = await params

	return (
		<>
			<div className='content__wrapper'>
				<Header />

				<TrackView trackId={trackId} />
			</div>

			<Footer />
		</>
	)
}

export default TrackPage
