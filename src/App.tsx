import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import './theme/global.css'
import styles from './styles.module.css'
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter'
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://48dce004ba8c7b68f0304bd7efd7d9b0@o4505921743552512.ingest.sentry.io/4505924769939456',
  integrations: [new Sentry.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
})

axeAccessibilityReporter()

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
