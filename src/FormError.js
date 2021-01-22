import React from 'react';

export default class FormError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Entry must not be blank</h2>
            );
        }
        return this.props.children;
    }
}