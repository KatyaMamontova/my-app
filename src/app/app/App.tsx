
import React, { useEffect, useState } from 'react'
import { Providers } from '@/app/app/providers'
import RootLayout from './layout/layout'
import { Header } from '../widgets/Header/Header'

export default function App() {

    return (
        (<RootLayout>
            <Providers><Header /></Providers>
        </RootLayout>)
    )
}