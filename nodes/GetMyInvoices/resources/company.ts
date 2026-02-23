import type { INodeProperties } from 'n8n-workflow';

export const companyDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['company'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                action: 'Get a company',
                routing: {
                    request: { method: 'GET', url: '=/companies/{{$parameter.companyId}}' },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many companies',
                routing: {
                    request: { method: 'GET', url: '/companies' },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Company ID',
        name: 'companyId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['company'],
                operation: ['get'],
            },
        },
        default: '',
    },
];