import React from 'react'
import type { GatsbyBrowser } from 'gatsby'

import MainLayout from './src/layout/MainLayout'
import './src/styles/global.css'

const PageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
	return <MainLayout {...props}>{element}</MainLayout>
}

const RootElement = ({ element }) => {
	return element
}

export const wrapPageElement = PageElement
export const wrapRootElement = RootElement
