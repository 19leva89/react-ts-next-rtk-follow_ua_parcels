import { cn } from '@repo/ui/lib'
import type { Metadata } from 'next'
import { Provider } from 'react-redux'
import { Nunito } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { store } from './store'
import { Auth } from '@/features/auth/auth'

import '@/styles/normalize.css'
import '@/styles/main.css'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Follow UA Parcels - package delivery tracking service',
	description: 'Follow UA Parcels - package delivery tracking service',
}

function RootLayout({ children }: PropsWithChildren) {
	return (
		<Provider store={store}>
			<html lang='en' suppressHydrationWarning>
				<body className={cn(nunito.className, 'antialiased')}>
					<div className='body__wrapper'>
						<Auth>{children}</Auth>
					</div>
				</body>
			</html>
		</Provider>
	)
}

export default RootLayout
