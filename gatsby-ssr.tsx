import React from 'react'
import type { GatsbySSR } from 'gatsby'

import MainLayout from './src/layout/MainLayout'
import './src/styles/global.css'

const PageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
	return <MainLayout {...props}>{element}</MainLayout>
}

const RootElement = ({ element }) => {
	return element
}

const renderBody = ({ setHtmlAttributes }) => {
	setHtmlAttributes({ lang: 'en' })
}

export const wrapPageElement = PageElement
export const wrapRootElement = RootElement
export const onRenderBody = renderBody
