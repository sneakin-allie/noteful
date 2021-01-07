import React from 'react';
import PropTypes from 'prop-types';
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext';
import { findNote, findFolder } from '../notes-helpers';
import './NotePageNav.css';

export default class NotePageNav extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    render() {
        const { notes, folders } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folderId)
        return (
            <div className="NotePageNav">
                <CircleButton
                    tag="button"
                    role="link"
                    onClick={() => this.props.history.goBack()} 
                    className="NotePageNav_back-button"
                >
                    Back
                </CircleButton>
                {folder && (
                    <h3 className="NotePageNav_folder-name">
                        {folder.name}
                    </h3>
                )}
            </div>
        )
    }
}

NotePageNav.propTypes = {
    notes: PropTypes.array,
    folders: PropTypes.array,
    noteId: PropTypes.string,
}