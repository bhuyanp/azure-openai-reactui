import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>,
)
