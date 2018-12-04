import BaseNodeView from '../../BaseNodeView'


export default class AnnoTaskStartView extends BaseNodeView {
    constructor(model) {
		super({
			header: {
				icon: 'fa fa-pencil',
				title: 'Annotation Task',
				colorInvalidated: 'warning',
				colorValidated: 'success',
			},
			content: [
				{
					attribute: 'Name',
					value: model.state.name,
					ref: 'name',
				},
				{
					attribute: 'Assignee',
					value: model.state.assignee,
					ref: 'assignee',
				},
			]
		})
    }
}