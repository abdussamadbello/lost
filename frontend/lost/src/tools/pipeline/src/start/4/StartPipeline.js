import React, { Component } from 'react'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import actions from 'actions/pipeline/pipelineStart'
import {alertLoading, alertClose, alertSuccess, alertError} from 'pipelineGlobalComponents/sweetalert'

const { postPipeline } = actions
class StartPipeline extends Component {
    constructor() {
        super()
        this.startPipe = this.startPipe.bind(this)
    }
    startPipe() {
        const json = {}
        json.name = this.props.step2Data.name
        json.description = this.props.step2Data.description
        json.elements = this.props.step1Data.elements.map(el => el.exportData)
        json.templateId = this.props.step0Data.templateId
        this.props.postPipeline(json)
        alertLoading()
    }

    componentDidUpdate() {
        alertClose()
        if (this.props.step3Data.response.status === 200) {
            if (typeof window !== 'undefined') {
                window.location.href = `${window.location.origin}/dashboard`;
            }
        } else {
            alertError(`(${this.props.step3Data.response.response.status}) ${this.props.step3Data.response.response.statusText}`)
        }

    }

    render() {
        return (
            <div className='pipeline-start-tab3-conainer'>
                <h3>Complete</h3>
                <p>You have successfully completed all steps.</p>
                <Button onClick={this.startPipe} color="primary" size="lg">
                    <FontAwesomeIcon icon={faPlayCircle} size="5x" />
                    Start Pipe
                    </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        step0Data: state.pipelineStart.step0Data,
        step1Data: state.pipelineStart.step1Data,
        step2Data: state.pipelineStart.step2Data,
        step3Data: state.pipelineStart.step3Data
    }
}

export default connect(mapStateToProps, { postPipeline })(StartPipeline)
