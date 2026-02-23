import type { INodeProperties } from 'n8n-workflow';

export const documentDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['document'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                action: 'Get a document',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/documents/{{$parameter.documentId}}',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many documents',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/documents',
                    },
                },
            },
            {
                name: 'Create',
                value: 'create',
                action: 'Create a document',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/documents',
                    },
                },
            },
        ],
        default: 'getAll',
    },

    // --- documentId wird bei GET benötigt ---
    {
        displayName: 'Document ID',
        name: 'documentId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['get'],
            },
        },
        default: '',
    },

    // --- Felder für POST/Create ---
    {
        displayName: 'File Content (Base64)',
        name: 'fileContent',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['create'],
            },
        },
        default: '',
        routing: { send: { type: 'body', property: 'file_content' } },
    },
    {
        displayName: 'File Name',
        name: 'fileName',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['create'],
            },
        },
        default: '',
        routing: { send: { type: 'body', property: 'file_name' } },
    },

    // --- Query-Parameter für Get Many ---
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Status',
                name: 'status',
                type: 'options',
                options: [
                    { name: 'Paid', value: 'paid' },
                    { name: 'Unpaid', value: 'unpaid' },
                ],
                default: 'paid',
                routing: { send: { type: 'query', property: 'status' } },
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                default: 100,
                routing: { send: { type: 'query', property: 'per_page' } },
            },
        ],
    },
];