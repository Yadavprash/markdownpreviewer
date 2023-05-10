import React from 'react';
import {connect} from 'react-redux'
import {editIt} from "./Actions";
import './styles.css'
import {toMarked} from "./index";


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        toMarked(this.props.input)
    }

    handleChange(e) {
        this.props.editIt(e.target.value)
        toMarked(e.target.value)
    }

    render() {
        return (
            <div id='rendered'>
                <div id='editorbox'>
                    <div id='navbar1'>Editor</div>
                    <textarea id="editor" value={this.props.input} onChange={this.handleChange}>
                    </textarea>
                </div>
                <div id='previewobox'>
                    <div id='navbar2'>Preview</div>
                    <div id="preview">
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        content: state.editIt,
        input: state.content
    }
}
const mapDispatchToProps = {
    editIt,
};
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);