import type { INodeProperties } from 'n8n-workflow';

export const attachmentDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['attachment'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                action: 'Get an attachment',
                routing: {
                    request: { method: 'GET', url: '=/attachments/{{$parameter.attachmentId}}' },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many attachments',
                routing: {
                    request: { method: 'GET', url: '/attachments' },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Attachment ID',
        name: 'attachmentId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['attachment'],
                operation: ['get'],
            },
        },
        default: '',
    },
];