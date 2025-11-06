import { cn } from '@repo/ui/lib'
import { Nunito } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Auth } from '@/features/auth/auth'
import { constructMetadata } from '@/lib/utils'
import { ReduxProvider } from '@/components/providers/redux-provider'

import '@ant-design/v5-patch-for-react-19'
import '@/styles/normalize.css'
import '@/styles/main.css'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = constructMetadata()

function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn(nunito.className, 'antialiased')}>
				<ReduxProvider>
					<div className='root body__wrapper'>
						<Auth>{children}</Auth>
					</div>
				</ReduxProvider>
			</body>
		</html>
	)
}

export default RootLayout
