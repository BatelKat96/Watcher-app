import { Component } from "react"

export class ErrorBoundary extends Component {

    state = {
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in children and re-render with error message
        this.setState({
            error,
            errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        // Normally, just render children
        return this.props.children
    }
}
