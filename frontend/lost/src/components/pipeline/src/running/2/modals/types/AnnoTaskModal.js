import React from 'react'
import { ModalHeader, ModalBody } from 'reactstrap';
import Table from '../../../../globalComponents/modals/Table'
import CollapseCard from '../../../../globalComponents/modals/CollapseCard'
export default (props)=>{
    return (
        <>
            <ModalHeader>Annotation Task</ModalHeader>
            <ModalBody>
                <Table
                    data={[
                        {
                            key: 'Annotation Task Name',
                            value: props.annoTask.name
                        },
                        {
                            key: 'Instructions',
                            value: props.annoTask.instructions
                        },
                        {
                            key: 'User/Group Name',
                            value: props.annoTask.userName
                        }
                    ]}
                />
                <CollapseCard>
                    <Table
                        data={[
                            {
                                key: 'Element ID',
                                value: props.id
                            },
                            {
                                key: 'Annotation Task ID',
                                value: props.annoTask.id
                            },
                            {
                                key: 'Type',
                                value: props.annoTask.type
                            },
                            {
                                key: 'Status',
                                value: props.state
                            }
                        ]}
                    />
                </CollapseCard>
            </ModalBody>
        </>
    )
}



